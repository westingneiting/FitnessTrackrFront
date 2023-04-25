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

  // possible search term functionality: 

  //   const [posts, setPosts] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState('');
  
  //   useEffect(() => {
    // fetch(BASE_URL)
    // .then(response => response.json())
    // .then(data => setPosts(data))
    // .catch(error => console.error(error));
  //   }, []);
  
  //   function postMatches(post, text) {
    // const lowerCaseText = text.toLowerCase();
    // return title.toLowerCase().includes(lowerCaseText) ||
    //   content.toLowerCase().includes(lowerCaseText) ||
    //   author.toLowerCase().includes(lowerCaseText);
  //   }
  
  //   const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  //   const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  
  //   return (
  //     <div>
  //       <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
  //       <Posts posts={postsToDisplay} />
  //     </div>
  //   );
  // }

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
        element={<Posts posts={posts} isLoggedIn={isLoggedIn} />}
        />
        <Route 
          path='/register' 
          element={<Register setToken={setToken} navigate={navigate} />}
        />
        <Route 
          path='/login'
          element={<Login setToken={setToken} navigate={navigate} />}
        />
        <Route 
           path='/create-post'
           element={<CreatePost token={token} getPosts={getPosts} />}
        />

      </Routes>
    </div>
  );
}

export default App;
