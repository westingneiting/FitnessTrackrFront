import React, { useState } from 'react';
import { makePost } from '../ajax-requests';
import { Button, TextField } from '@mui/material';

const styles = {
  fontFamily: 'Roboto'
};

function CreatePost({ token, getPosts, navigate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();
    const post = {title, description, price, location, willDeliver}

    const results = await makePost(post, token)

    if (results.success) {
        getPosts();
        navigate('/');
    } else {
      window.alert('Please fill required fields.');
    }
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <TextField 
        label='Enter Title*'
        variant='standard'
        value={title}
        onChange={(event) => {setTitle(event.target.value)}}
      />
      <TextField 
        label='Enter Description*'
        variant='standard'
        value={description}
        onChange={(event) => {setDescription(event.target.value)}}
      />
      <TextField 
        label='Enter Price*'
        variant='standard'
        value={price}
        onChange={({target: {value}}) => {setPrice(value)}} //this is the same as the onChanges above, just written different
      />
      <TextField 
      label='Enter Location'
      variant='standard'
      value={location}
      onChange={(ev) => setLocation(ev.target.value)}
      />
      <div style={{display: 'flex', alignItems: 'center'}}>
        <label htmlFor='checkbox' style={styles}>Delivery available?</label>
        <input
        type='checkbox'
        value={willDeliver}
        onChange={() => setWillDeliver(!willDeliver)}
        />
      </div>
      <Button type='submit' variant='contained'>
        Post
      </Button>
    </form>
    </>
  );
}

export default CreatePost;

