import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modal } from '../styles/theme';
import { TextField, IconButton, Avatar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// Icons
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CancelIcon from '@mui/icons-material/Cancel';
import useTweetCall from '../hooks/useTweetCall';
import { useNavigate } from 'react-router-dom';



// Utility function for image preview
const getImagePreviewUrl = (file) => {
  return URL.createObjectURL(file);
};

export default function PostModal() {
  const { newTweet } = useTweetCall();
  const navigate = useNavigate();


  const [open, setOpen] = useState(false);
  const [tweet, setTweet] = useState("");
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTweetChange = (event) => {
    setTweet(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(prevImages => [...prevImages, ...files.map(file => ({
      file,
      preview: getImagePreviewUrl(file),
    }))]);
    setFileNames(files.map(file => file.name).join(', '));
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  
  const CHARACTER_LIMIT = 120;


  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('tweet', tweet);
    
    images.forEach((file) => {
      formData.append('image', file);
    });

    newTweet(formData);
    console.log('Form data prepared:', formData);

    // Clear the input fields after submission
    setTweet('');
    setImages([]);
    setFileNames('');
    setOpen(false)
  };
  // Media Query
  const isSmallScreen = useMediaQuery('(max-width:1280px)');
  const [drawerOpen, setDrawerOpen] = useState(!isSmallScreen);

  useEffect(() => {
    setDrawerOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <div>
      {isSmallScreen ? 
        <Button  
          onClick={handleOpen}
          variant='contained' 
          sx={{ borderRadius: '40px', backgroundColor: '#188CD8', padding: '10px', marginTop: '5px', minWidth: 'auto', width: 'auto', marginLeft: '5px' }}>
          <BorderColorIcon />
        </Button>
        :
        <Button  
          onClick={handleOpen}
          variant='contained' 
          sx={{ borderRadius: '20px', backgroundColor: '#188CD8', width: '90%', padding: '10px', marginTop: '5px', marginLeft: '10px' }}>
          Post
        </Button>
      }

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modal}>
          <Box> 
            <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin: '1rem' }} />
          </Box>
          <Box width='100%'>
            <TextField 
              inputProps={{ maxlength: CHARACTER_LIMIT }}
              value={tweet}
              helperText={`${tweet.length}/${CHARACTER_LIMIT}`}
              onChange={handleTweetChange}
              id="standard-basic"  
              variant="standard"
              placeholder="What is happening?!"
              fullWidth 
              multiline
              rows={2}
              sx={{ marginTop: '10px', paddingRight: '1rem' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginBottom: '10px' }}>
              <Box >
                <IconButton component="label">
                  <AddPhotoAlternateIcon fontSize='small' />
                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={handleImageChange} 
                    hidden 
                  />
                </IconButton>
                <IconButton >
                  <EmojiEmotionsIcon fontSize='small' />
                </IconButton>
                <IconButton >
                  <GifIcon fontSize='medium' />
                </IconButton>
                <IconButton >
                  <LocationOnIcon fontSize='medium' />
                </IconButton>
              </Box>
              <Box sx={{ marginRight: '1rem' }}>
                <Button variant='contained' sx={{ borderRadius: '20px' }} onClick={handleSubmit}>
                  Post
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {images.map((image, index) => (
                <Box key={index} sx={{ position: 'relative' }}>
                  <img 
                    src={image.preview} 
                    alt={`preview-${index}`} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                  />
                  <IconButton 
                    onClick={() => handleRemoveImage(index)} 
                    sx={{ position: 'absolute', top: '5px', right: '5px' }}
                  >
                    <CancelIcon fontSize='small' />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
