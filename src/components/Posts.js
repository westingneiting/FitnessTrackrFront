import React, { Fragment } from "react";
import { deletePost } from "../ajax-requests";
import Button from '@mui/material/Button';


function Posts({ posts, isLoggedIn, token, getPosts }) {
//   console.log('from Posts component', posts)

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
  

  if (!isLoggedIn) {
    return (
      <p>Log in to see posts!</p>
    );
  }

  return (
    <>
      {posts && 
        posts.map((post) => {
          return (
            <Fragment key={post._id}>
                <p>{post.title}</p>
              {post.isAuthor ? (
                <Button variant="outlined" onClick={() => handleDelete(post._id, token, getPosts)}>Delete</Button>
              ) : isLoggedIn ? (
                <Button variant="contained">Message</Button>
              ) : null}
            </Fragment>
          );
        })}
    </>
  );
}

export default Posts;
