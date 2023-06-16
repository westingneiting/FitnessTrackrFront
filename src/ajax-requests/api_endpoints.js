export const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;

// User endpoints

// const registerUser = async (user) => {
//   try {
//     const response = await fetch(`${BASE_URL}/users/register`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         user: {
//           username: user.user,
//           password: user.password
//         }
//       })
//     });
//     const result = await response.json();
//     console.log(result);

//     localStorage.setItem('fitness_tracker_JWT', json.token);
//     return json;
//   }
// }

// const login = async (username, password) => {
      
//   try {
//     const response = await fetch(`${BASE_URL}/users/login`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           username,
//           password
//       })
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }






// GET/activities

// const getAllActivities = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/activities`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const result = await response.json();

//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }
  

// const createActivity = async (token, name, description) => {
//   try {
//     const response = await fetch(`${BASE_URL}/activities`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         name: name,
//         description: description
//       }) 
//     });

//     const result = await response.json();

//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

// const updateActivity = async (token, {activityId, activityName, description}) => {
//   try {
//     const response = await fetch(`${BASE_URL}/activities`, {
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//       },
//       method: "PATCH",
//       body: JSON.stringify({
//         post: {
//           activityId, activityName, description
//         }
//       })
//     });

//       const result = await response.json();
//       console.log(result);
//       return result
//     } catch (err) {
//     console.error(err);
//     }
// }

// const getAllPublicRoutineActivities = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/activities/3/routines`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

// GET/routines

// const getAllRoutines = async () => {
//   try {
//   const response = await fetch(`${BASE_URL}/routines`, {
//     headers: {
//     'Content-Type': 'application/json',
//     },
//   });
  
//   const result = await response.json();
//   console.log(result);
//   return result
//   } catch (err) {
//   console.error(err);
//   }
//   }

// const createRoutine = async (token, { name, goal, isPublic }) => {
//   try {
//     const response = await fetch(`${BASE_URL}/routines`, {
//       method: "POST",
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         name: name,
//         goal: goal,
//         isPublic: isPublic
//       })
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }


// const updateRoutine = async (token, { routineId, creatorId, isPublic, routineName, goal}) => {
//   try {
//     const response = await fetch(`${BASE_URL}/routines/6`, {
//       method: "PATCH",
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         post: {
//           routineId, creatorId, isPublic, routineName, goal
//         }
//       })
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

// const deleteRoutine = async (token, { routineId }) => {
//   console.log(routineId)
//   try {
//     const response = await fetch(`${BASE_URL}/routines/6`, {
//       method: "DELETE",
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//       },
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }
 

// const routineActivity = async (token, {activityId, count, duration}) => {
//   try {
//     const response = await fetch(`${BASE_URL}/routines/6/activities`, {
//       method: "POST",
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         activityId, count, duration
//       })
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

// routine activities endpoint

// const updateRoutineActivity = async (token, { activityId, routineId, count, duration}) => {
//   try {
//     const response = await fetch(`${BASE_URL}/routine_activities/11`, {
//       method: "PATCH",
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         activityId, routineId, count, duration
//       })
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

// const deleteRoutineActivity = async (token) => {
//   try {
//     const response = await fetch(`${BASE_URL}/routine_activities/11`, {
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}}`
//       },
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }
