import React from 'react'
import { Grid, Box } from '@mui/material';



const ImageBox = ({images}) => {
    const renderImages = () => {
        const imageCount = images.length;
    
        return images.map((image, index) => (
          <Grid item xs={imageCount === 1 ? 12 : imageCount === 2 || imageCount === 3 || imageCount === 4 ? 6 : 4} key={index}>
            <Box
            
              component="img"
              src={image}
              alt={`Uploaded image ${index + 1}`}
              sx={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: 5,
                border: '1px solid gray',
              }}
            />
          </Grid>
        ));
      };
    
      return (
        <Grid container spacing={1}>
          {renderImages()}
        </Grid>
      );
    };
    
    export default ImageBox;