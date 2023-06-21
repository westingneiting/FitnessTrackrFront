import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllActivities } from "../ajax-requests";
import { Card, CardContent, Typography } from '@mui/material';

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
      <Typography variant="h2" component="h2">Activities</Typography>
      {activities.map((activity) => (
        <Card key={activity.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
                {activity.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Activities;
