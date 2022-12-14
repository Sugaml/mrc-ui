import { Typography } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

export const DocumentInformation=()=> {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      console.log(selectedImage)
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div>
      <Typography>Document Information</Typography>
      <div style={{ display:'flex', backgroundColor:'red' }}>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none",height:"150px" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        <Button style={{height:"150px" }} variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>{

      console.log("Image URL ",imageUrl)
      }
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height="150px" />
        </Box>
      )}
      </div>
    </div>
  );
}


