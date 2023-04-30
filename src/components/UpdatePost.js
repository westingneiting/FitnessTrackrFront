import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updatePost } from "../ajax-requests";
import { Button, Card, CardContent, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

const styles = {
  fontFamily: "Roboto",
  searchBar: {
    marginTop: "15px",
    marginBottom: "8px",
    marginLeft: "20px",
    width: "100%",
    maxWidth: "350px",
  },
  card: {
    fontFamily: "Roboto",
    marginTop: "20px",
    width: "90%",
    padding: "10px"
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

function UpdatePost({ posts, token, getPosts, navigate }) {
  const { postId } = useParams();
  const [post] = posts.filter((post) => post._id === postId);

  const { title, description, price, location, willDeliver } = post ? post : {};

  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);
  const [updatedPrice, setPrice] = useState(price);
  const [updatedLocation, setLocation] = useState(location);
  const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedPost = {
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice,
      location: updatedLocation,
      willDeliver: updatedWillDeliver,
    };

    const results = await updatePost(postId, token, updatedPost);

    if (results.success) {
      getPosts();
      navigate("/");
    } else {
      setErrorMessage(results.error.message);
    }
  };

  return (
    <div style={styles.container}>
    <Card variant="outlined" style={styles.card}>
      <CardContent>
        {post ? (
          <>
            <Typography variant="h5">Update Post</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Enter Title"
                variant="standard"
                value={updatedTitle}
                onChange={(ev) => setTitle(ev.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Enter Description"
                variant="standard"
                value={updatedDescription}
                onChange={(ev) => setDescription(ev.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Enter Price"
                variant="standard"
                value={updatedPrice}
                onChange={(ev) => setPrice(ev.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Enter Location"
                variant="standard"
                value={updatedLocation}
                onChange={(ev) => setLocation(ev.target.value)}
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={updatedWillDeliver}
                    onChange={() => setWillDeliver(!updatedWillDeliver)}
                  />
                }
                label="Delivery available?"
                style={{ marginTop: "1rem" }}
              />
              <Button type="submit" variant="contained" fullWidth style={{ marginTop: "1rem" }}>
                Save Changes
              </Button>
            </form>
            {errorMessage && <Typography variant="body1">{errorMessage}</Typography>}
          </>
        ) : (
          <Typography variant="h5">Post does not exist.</Typography>
        )}
      </CardContent>
    </Card>
    </div>
  );
}

export default UpdatePost;




