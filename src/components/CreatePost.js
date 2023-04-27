import React, { useState } from 'react';
import { makePost } from '../ajax-requests';
import Button from '@mui/material/Button';

const styles = {
  fontFamily: 'Roboto'
};

function CreatePost({ token, getPosts, navigate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();
    const post = {title, description, price, location, willDeliver}

    const results = await makePost(post, token)

    if (results.success) {
        getPosts();
        navigate('/');
    } 
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Enter Title'
        value={title}
        onChange={(event) => {setTitle(event.target.value)}}
      />
      <input 
        type='text'
        placeholder='Enter Description'
        value={description}
        onChange={(event) => {setDescription(event.target.value)}}
      />
      <input 
        type='text'
        placeholder='Enter Price'
        value={price}
        onChange={({target: {value}}) => {setPrice(value)}} //this is the same as the onChanges above, just written different
      />
      <input 
      type='text'
      placeholder='Enter Location'
      value={location}
      onChange={(ev) => setLocation(ev.target.value)}
      />
        <label htmlFor='checkbox' style={styles}>Delivery available?</label>
        <input
        type='checkbox'
        checked={willDeliver}
        onChange={() => setWillDeliver(!willDeliver)}
        />
      <Button type='submit' variant='contained'>
        Post
      </Button>
    </form>
  );
}

export default CreatePost;

