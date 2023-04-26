import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; //eventually we'll include Link with Routes and Route
import { 
  Register,
  Posts, 
  Login,
  CreatePost,
  Nav
} from './';


import { fetchPosts, myData } from '../ajax-requests';


function App() {

  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  
  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  }

  async function getPosts() {
    const results = await fetchPosts(token);
    if (results.success) {
      setPosts(results.data.posts)
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
   getPosts();
   if (token) {
    getMyData();
    setIsLoggedIn(true);
   }
  }, [token])

  // console.log(posts);
  // use this ^^ console log as you build useeffects e.g. console.log(posts)
  
  return (
    <div>
      <Nav 
      setToken={setToken}
      setIsLoggedIn={setIsLoggedIn}
      isLoggedIn={isLoggedIn}
      navigate={navigate} />
      <Routes>
        <Route 
          path='/'
          element={<Posts 
            posts={posts} 
            isLoggedIn={isLoggedIn} 
            token={token}
            getPosts={getPosts}
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
           path='/create-post'
           element={<CreatePost 
            token={token} 
            getPosts={getPosts} 
          />}
        />

      </Routes>
    </div>
  );
}

export default App;
