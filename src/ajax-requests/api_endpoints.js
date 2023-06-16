// GET/activities

const getAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
  

const createActivity = async (token, name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: 'Running',
        description: 'Keep on running!'
      }) 
    });

    const result = await response.json();

    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

const updateActivity = async (token, {activityId, activityName, description}) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      method: "PATCH",
      body: JSON.stringify({
        name: 'Running',
        description: 'Keep on running, til you drop!'
      })
    });

      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
    console.error(err);
    }
}

const getAllPublicRoutineActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities/3/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

// GET/routines

const getAllRoutines = async () => {
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
  });
  
  const result = await response.json();
  console.log(result);
  return result
  } catch (err) {
  console.error(err);
  }
  }

const createRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        name: 'Long Cardio Routine',
        goal: 'To get your heart pumping!',
        isPublic: true
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}


const updateRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6`, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        name: 'Long Cardio Day',
        goal: 'To get your heart pumping!'
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

const deleteRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6`, {
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
 

const attachActivitiyToRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activityId: 7,
        count: 1, 
        duration: 20
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

// routine activities endpoint

const updateRoutineActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/11`, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        count: 2,
        duration: 30
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

const deleteRoutineActivity = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/11`, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
