import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllActivities } from "../ajax-requests";

function Activities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function fetchActivities() {
          const result = await getAllActivities();
          setActivities(result);
        }
        fetchActivities();
      }, []);

    return (
        <div>
            <h2>Activities</h2>
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