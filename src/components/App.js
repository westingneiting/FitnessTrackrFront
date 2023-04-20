import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; //eventually we'll include Link with Routes and Route
import { 
  Register,
  Posts
} from './';
import { fetchPosts } from '../ajax-requests';


function App() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  
  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  }

  async function getPosts() {
    const results = await fetchPosts();
    if (results.success) {
      setPosts(results.data.posts)
    }
  }
  
  useEffect(() => {
    tokenCheck();
  }, [])
  
  useEffect (() => {
   getPosts();
  }, [token])

  // use this console log as you build useeffects console.log(posts)
  
  return (
    <div>
      <Routes>
        <Route 
        path='/'
        element={<Posts posts={posts} />}
        />
        <Route 
          path='register' 
          element={<Register setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
