import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; //eventually we'll include Link with Routes and Route
import { 
  Register
} from './';



import { userRoutines, myData } from '../ajax-requests';

// import '@fontsource/roboto';

function App() {

  const [token, setToken] = useState('');
  const [routines, setRoutines] = useState([]);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  
  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  }

  async function getRoutines() {
    const results = await userRoutines(token);
    if (results.success) {
      setRoutines(results.data.posts)
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
   getRoutines();
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
        {/* <Route 
          path='/'
          element={<Posts 
            posts={posts} 
            isLoggedIn={isLoggedIn} 
            token={token}
            getPosts={getPosts}
          />}
        /> */}
        <Route 
          path='/register' 
          element={<Register 
            setToken={setToken} 
            navigate={navigate}
          />}
        />
        {/* <Route 
          path='/login'
          element={<Login 
            setToken={setToken} 
            navigate={navigate} 
          />}
        />
        <Route 
           path='/create-post'
           element={<CreatePost 
            token={token} 
            getPosts={getPosts}
            navigate={navigate}
          />}
        />
        <Route 
          path='/update-post/:postId'
          element={<UpdatePost 
            posts={posts} 
            token={token}
            getPosts={getPosts}
            navigate={navigate}
          />}
        />
        <Route 
        path='/send-message/:postId'
        element={<SendMessage
          posts={posts}
          token={token}
          getPosts={getPosts}
          navigate={navigate}
          handleSend={handleSendMessage}
        />}
        />
        <Route 
        path='/profile'
        element={<Profile
          user={user}
          posts={posts}
          token={token}
          fetchPosts={fetchPosts}
          navigate={navigate}
          messageContent={messageContent}
        />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
