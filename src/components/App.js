import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; //eventually we'll include Link with Routes and Route
import { 
  Register,
  Login,
  Routines,
  Activities,

} from './';

import { myData, getAllActivities } from '../ajax-requests';

// import '@fontsource/roboto';

function App() {

  const [token, setToken] = useState('');
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  
  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  }

  async function getActivities() {
    const results = await getAllActivities(token);
    if (results.success) {
      setActivities(results.data.activities)
    }
  }
  
  async function getMyData() {
    const results = await myData(token);
    if (results.success){
      setUser(results.data);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [])
  
  useEffect (() => {
   getActivities();
   if (token) {
    getMyData();
    setIsLoggedIn(true);
   }
  }, [token])

  // console.log(posts);
  // use this ^^ console log as you build useeffects e.g. console.log(posts)
  
  return (
    <div>
      <Routes>
        <Route 
          path='/activities'
          element={<Activities 
            activities={activities} 
            isLoggedIn={isLoggedIn} 
            token={token}
            getActivities={getActivities}
          />}
        />
        <Route 
          path='/register' 
          element={<Register 
            setToken={setToken} 
            navigate={navigate}
          />}
        />
        <Route 
          path='/login'
          element={<Login 
            setToken={setToken} 
            navigate={navigate} 
          />}
        />
        <Route 
          path='/routines'
          element={<Routines
            user={user}
            token={token}
            navigate={navigate}
          />}
        />
        {/* <Route 
           path='/create-post'
           element={<CreatePost 
            token={token} 
            getPosts={getPosts}
            navigate={navigate}
          />}
        /> */}
        {/* <Route 
          path='/update-post/:postId'
          element={<UpdatePost 
            posts={posts} 
            token={token}
            getPosts={getPosts}
            navigate={navigate}
          />}
        /> */}
        {/* <Route 
        path='/send-message/:postId'
        element={<SendMessage
          posts={posts}
          token={token}
          getPosts={getPosts}
          navigate={navigate}
          handleSend={handleSendMessage}
        />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
