import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updatePost } from "../ajax-requests";
import Button from "@mui/material/Button";

const styles = {
  fontFamily: 'Roboto'
};


function UpdatePost({ posts, token, getPosts, navigate }) {
  const { postId } = useParams();
  const [post] = posts.filter((post) => post._id === postId )
  
  const { title, description, price, location, willDeliver } = post ? post : {};

  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);
  const [updatedPrice, setPrice] = useState(price);
  const [updatedLocation, setLocation] = useState(location);
  const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedPost = {
        title: updatedTitle,
        description: updatedDescription,
        price: updatedPrice,
        location: updatedLocation,
        willDeliver: updatedWillDeliver
    }

    const results = await updatePost(postId, token, updatedPost);

    if (results.success) {
      getPosts();
      navigate('/');
    } else {
        setErrorMessage(results.error.message)
    }
  }

  return (
    <>
      {post ? (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Enter Title'
            value={updatedTitle}
            onChange={(ev) => setTitle(ev.target.value)}
            />
            <input 
            type='text'
            placeholder='Enter Description'
            value={updatedDescription}
            onChange={(ev) => setDescription(ev.target.value)}
            />
            <input 
            type='text'
            placeholder='Enter Price'
            value={updatedPrice}
            onChange={(ev) => setPrice(ev.target.value)}
            />
            <input 
            type='text'
            placeholder='Enter Location'
            value={updatedLocation}
            onChange={(ev) => setLocation(ev.target.value)}
            />
            <label htmlFor='checkbox' style={styles}>Delivery available?</label>
            <input 
            type='checkbox'
            checked={updatedWillDeliver}
            onChange={() => setWillDeliver(!updatedWillDeliver)}
            />
            <Button variant="contained" type='submit'>Save Changes</Button>
        </form>
        {
            errorMessage && <p>{errorMessage}</p>
        }
        </>
      ) : (
        <h1 style={styles}>Post does not exist.</h1>
    )}
    </>
  );
}

export default UpdatePost;
