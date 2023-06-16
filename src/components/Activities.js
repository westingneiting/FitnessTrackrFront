import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllActivities } from "../ajax-requests";

function Activities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchActivities();
    }, []);

    async function fetchActivities() {
        try {
            const response = await getAllActivities();
            if (response.success) {
                setActivities(response.data.activities);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Main Page</h1>
            <h2>here lies activities O.o</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        <Link to={`/activities/${activity.id}`}>
                            {activity.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Activities;