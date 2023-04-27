import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { deletePost } from "../ajax-requests";
import { Button, TextField } from '@mui/material';

const styles = {
  fontFamily: 'Roboto',
  searchBar: {
    marginTop: '15px',
    marginBottom: '8px',
    width: '100%',
    maxWidth: '350px',
  },
};

function Posts({ posts, isLoggedIn, token, getPosts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  async function handleDelete(postId, token, getPosts) {
    try {
      const result = await deletePost(postId, token);
      if (result.success) {
        getPosts();
      } else {
        console.log(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  }

  function filterPosts(posts, searchQuery) {
    return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <>
    <TextField
      label="Search posts"
      value={searchQuery}
      onChange={handleSearchChange}
      style={styles.searchBar}
      size='small'
    />
      {filteredPosts.length === 0 ? (
        <p style={styles}>No posts found</p>
      ) : (
        filteredPosts.map((post) => {
          return (
            <Fragment key={post._id}>
                <p style={styles}>{post.title}</p>
              {isLoggedIn && post.isAuthor && (
                <>
                  <Button variant="outlined" onClick={() => handleDelete(post._id, token, getPosts)}>Delete</Button>
                  <Link to={`/update-post/${post._id}`}><Button>Edit Post</Button></Link>
                </>
              )}
              {isLoggedIn && !post.isAuthor && (
                <Link to={`/send-message/${post._id}`}>
                 <Button variant="contained">Message</Button>
                </Link>
              )}
            </Fragment>
          );
        })
      )}
    </>
  );
}


export default Posts;
