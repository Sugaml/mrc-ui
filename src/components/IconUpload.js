import { Button, Grid, Typography } from '@material-ui/core';
import React  from 'react';
import { useState } from "react";


export const IconUpload=()=>{

 const [selectedImage, setSelectedImage] = useState(null);
 const [imageUrl, setImageUrl] = useState(null);
    console.log("upload url :: ",imageUrl,selectedImage)
   const  onFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const _file = event.target.files[0];
            if (_file && _file.size <= 102400) {
                    setSelectedImage(_file)
                    setImageUrl(URL.createObjectURL(_file))
            }
        }
    };
        return (
            <Grid container className="uploadIcon" data-test="uploadIcon-container">

                <Grid item md={ 12 }>{imageUrl && <img src={ imageUrl } height={ 100 } width={ 100 } className='uploadimgIcon' alt="" data-test="preview-image" />}</Grid>
                <Grid container md={ 8 } spacing={ 2 }>
                    <Grid item>
                        <Typography variant="subtitle1">Icon</Typography>
                    </Grid>
                    <Grid item >

                        <input type="file" onChange={onFileChange} accept="image/*" id="contained-button-file" className="inputFile" data-test="file-field" />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" size='small' color="primary" component="span">
                               Upload
                            </Button>
                        </label>
                    </Grid>
                </Grid>
            
                {/* <Grid item md={ 12 }><span className="errorTxt">{this.state.errorMsg}</span></Grid> */}
            </Grid>
        );
}
