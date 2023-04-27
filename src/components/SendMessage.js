import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postMessage } from "../ajax-requests";
import Button from "@mui/material/Button";

function SendMessage({ posts, token, getPosts, navigate}) {
  const { postId } = useParams();
  const[post] = posts.filter((post) => post._id === postId);
  const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const message = {content}
        const results = await postMessage(postId, message, token);
        if (results.success) {
            setContent('');
        } else {
            setErrorMessage(results.error.message);
        }
    } 

    return (
        <>
            {post ? (
                <>
            <h2>Message owner of '{post.title}': </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='content'>New Message: </label>
                <input 
                type='text'
                id='content'
                value={content}
                onChange={(event) => setContent(event.target.value)}
                />
                <Button variant="contained" type='submit'>Send</Button>
            </form>
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </>
    );
}

export default SendMessage;
