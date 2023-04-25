import React, { Fragment } from "react";

function Posts({ posts, isLoggedIn }) {
//   console.log('from Posts component', posts)

  return (
    <>
      {posts && 
        posts.map((post) => {
          return (
            <Fragment key={post._id}>
                <p>{post.title}</p>
              {post.isAuthor ? (
                <button>Delete</button>
              ) : isLoggedIn ? (
                <button>Message</button>
              ) : null}
            </Fragment>
          );
        })}
    </>
  );
}

export default Posts;
