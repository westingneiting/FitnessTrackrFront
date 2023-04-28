import React, { useState, useEffect } from "react";

const styles = {
  fontFamily: 'Roboto',
  h1: {
    fontFamily: 'Roboto',
    marginTop: '10px',
    marginBottom: '10px',
  },
  h2: {
    fontFamily: 'Roboto'
  }
};

function Profile({ user, token, logout }) {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages(messages => [...messages, message]);
  }

  return (
    <>
      <h1 style={styles.h1}>My Profile</h1>
      <div>
        <h2 style={styles.h2}>My messages: </h2>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index}>
              <h3>{`Post ID: ${message.postId}`}</h3>
              <p>{`Message: ${message.message.content}`}</p>
            </div>
          ))
        ) : (
          <p>You haven't received any messages yet.</p>
        )}
        </div>
    </>
    )
};


export default Profile;
