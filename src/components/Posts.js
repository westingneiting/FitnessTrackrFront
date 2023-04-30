import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { deletePost } from "../ajax-requests";
import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material';

const styles = {
  fontFamily: 'Roboto',
  searchBar: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    width: '100%',
    maxWidth: '350px'
  },
  card: {
    fontFamily: 'Roboto',
    marginTop: '10px',
    width: '90%',
    padding: '10px',
  },
  deliveryStatus: {
    marginLeft: '10px',
    color: '#0F9D58'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',

    flexWrap: 'wrap'
  },
  textfield: {

  }
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
    <div style={styles.container}>
    <>
      <TextField
        variant="filled"
        label="Search posts"
        value={searchQuery}
        onChange={handleSearchChange}
        style={styles.searchBar}
        size='small'
      />
      {filteredPosts.length === 0 ? (
        <p style={styles.card}>No posts found</p>
      ) : (
        filteredPosts.map((post) => {
          return (
            <Card key={post._id} style={styles.card}>
              <CardHeader title={post.title} />
              <CardContent style={styles.CardContent}>
                <p style={{ marginBottom: '8px' }}>{post.description}</p>
                <p>{post.location}</p>
                <p>{post.willDeliver}</p>
              </CardContent>
              <CardActions>
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
                {post.willDeliver && (
                  <Typography style={styles.deliveryStatus}>Delivery available</Typography>
                )}
              </CardActions>
            </Card>
          );
        })
      )}
    </>
    </div>
  );
}

export default Posts;
