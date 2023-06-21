export const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;


// USER REQUESTS ========================================================
export const registerUser = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: user.username,
          password: user.password
      }),
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const login = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: user.username,
          password: user.password
      }),
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
};

export const myData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
};

export const userRoutines = async (username, token) => {
  try {
    const response = await fetch (`${BASE_URL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};


// ACTIVITIES REQUESTS ======================================================
export const getAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
  

export const createActivity = async (token, name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        description: description
      }) 
    });

    const result = await response.json();

    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const updateActivity = async (token, {activityId, activityName, description}) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      method: "PATCH",
      body: JSON.stringify({
        post: {
          activityId, activityName, description
        }
      })
    });

      const result = await response.json();
      // console.log(result);
      return result
    } catch (err) {
    console.error(err);
    }
}

// export const getAllPublicRoutineActivities = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/activities/${activityId}/routines`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const result = await response.json();
//     // console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

// ROUTINES REQUESTS ==========================================================
export const getAllRoutines = async () => {
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
    'Content-Type': 'application/json',
    },
  });
  
  const result = await response.json();
  // console.log(result);
  return result
  } catch (err) {
  console.error(err);
  }
  }

  export const createRoutine = async (token, { name, goal, isPublic }) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic
      })
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}


export const updateRoutine = async (token, { routineId, creatorId, isPublic, routineName, goal}) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6`, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          routineId, creatorId, isPublic, routineName, goal
        }
      })
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const deleteRoutine = async (token, { routineId }) => {
  console.log(routineId)
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
 

// ROUTINE_ACTIVITIES REQUESTS ================================================

/* Attaches actvity to a routine */
export const routineActivity = async (token, activityId, { count, duration }) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${activityId}/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        activityId, count, duration
      })
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

/* Updates the activities on a routine */
export const updateRoutineActivity = async (token, routineActivityId, { count, duration }) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ count, duration })
    });

    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

/* Removes an activity from a routine */
export const deleteRoutineActivity = async ( routineActivityId, token ) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}}`
      },
    });
    const result = await response.json();
    // console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

