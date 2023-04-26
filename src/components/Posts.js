import React, { Fragment } from "react";
import Button from '@mui/material/Button';

function Posts({ posts, isLoggedIn }) {
//   console.log('from Posts component', posts)
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
                <Button variant="outlined">Delete</Button>
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
