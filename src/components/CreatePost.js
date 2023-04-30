import React, { useState } from 'react';
import { makePost } from '../ajax-requests';
import { Button, Card, CardContent, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

const styles = {
  fontFamily: 'Roboto',
  searchBar: {
    marginTop: '15px',
    marginBottom: '8px',
    marginLeft: '20px',
    width: '100%',
    maxWidth: '350px',
  },
  card: {
    fontFamily: 'Roboto',
    marginTop: '20px',
    width: '90%',
    padding: '10px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
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
    <div style={styles.container}>
    <Card variant='outlined' style={styles.card}>
      <CardContent>
        <Typography variant='h5'>Create Post</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label='Enter Title'
            variant='standard'
            value={title}
            onChange={(event) => {setTitle(event.target.value)}}
            fullWidth
            required
          />
          <TextField 
            label='Enter Description'
            variant='standard'
            value={description}
            onChange={(event) => {setDescription(event.target.value)}}
            fullWidth
            required
          />
          <TextField 
            label='Enter Price'
            variant='standard'
            value={price}
            onChange={({target: {value}}) => {setPrice(value)}} //this is the same as the onChanges above, just written different
            fullWidth
            required
          />
          <TextField 
            label='Enter Location'
            variant='standard'
            value={location}
            onChange={(ev) => setLocation(ev.target.value)}
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox checked={willDeliver} onChange={() => setWillDeliver(!willDeliver)} />}
            label='Delivery available?'
            style={{ marginTop: '1rem' }}
          />
          <Button type='submit' variant='contained' fullWidth style={{ marginTop: '1rem' }}>
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  );
}

export default CreatePost;
