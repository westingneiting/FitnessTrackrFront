import React, { useState, useEffect } from "react";
import { getAllActivities } from "../ajax-requests";
import { Card, CardContent, Typography, TextField } from '@mui/material';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchActivities() {
      const result = await getAllActivities();
      setActivities(result);
    }
    fetchActivities();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  function filterActivities(activities, searchQuery) {
    return activities.filter(activity => activity.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const filteredActivities = filterActivities(activities, searchQuery);

  return (
    <div>
      <Typography variant="h2" component="h2">Activities</Typography>
      <TextField
        variant="filled"
        label="Search activities"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '1rem' }}
        size='small'
      />
      {filteredActivities.length === 0 ? (
        <p>No activities found</p>
      ) : (
        filteredActivities.map((activity) => (
          <Card key={activity.id} style={{ marginBottom: '1rem' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {activity.name}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

export default Activities;
