import React, { useState } from 'react';
import { makePost } from '../ajax-requests';
import Button from '@mui/material/Button';

function CreatePost({ token, getPosts }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('handlesubmitted')
    const post = {title, description, price}

    const results = await makePost(post, token)

    if (results.success) {
        getPosts();
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
      <Button type='submit' variant='contained'>
        Post
      </Button>
    </form>
  );
}

export default CreatePost;

