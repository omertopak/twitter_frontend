import React, { useState } from 'react';
import { Avatar, Box, IconButton, Button, TextField, Typography } from '@mui/material';
import { bracketter, menuButton, menuButtonSelected } from '../styles/theme';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import useTweetCall from '../hooks/useTweetCall';

const HeaderTwit = () => {
  const navigate = useNavigate();
  const { newTweet } = useTweetCall();
  
  // State for managing selected button
  const [selectedButton, setSelectedButton] = useState('/home');
  
  // State for managing tweet text and images
  const [tweetText, setTweetText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [fileNames, setFileNames] = useState('');

  // Function to handle navigation and button selection
  const handleClick = (path) => {
    setSelectedButton(path);
    navigate(path);
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 4) {
      alert('You can only upload up to 4 images.');
      return;
    }
    setSelectedImages(files);
    setFileNames(files.map(file => file.name).join(', ')); // Set file names for display
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('tweet', tweetText);
    
    // Append each selected file to FormData under the 'image' key
    selectedImages.forEach((file) => {
      formData.append('image', file);
    });

    // Now you can send the formData to your backend
    newTweet(formData);
    console.log('Form data prepared:', formData);
  };

  return (
    <Box>
      <Box display='flex' sx={[bracketter, { justifyContent: 'space-evenly', height: '50px' }]}>
        <Button 
          onClick={() => handleClick('/home')}
          sx={selectedButton === '/home' ? menuButtonSelected : menuButton}
          style={{ width: '50%' }}
        >
          For you
        </Button>
        <Button 
          onClick={() => handleClick('/following')}
          sx={selectedButton === '/following' ? menuButtonSelected : menuButton}
          style={{ width: '50%' }}
        >
          Following
        </Button>
      </Box>
      <Box sx={[{ display: 'flex', gap: '1rem' }, bracketter]}>
        <Box> 
          <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin: '1rem' }} />
        </Box>
        <Box width='100%'>
          <TextField 
            id="standard-basic"  
            variant="standard"
            placeholder="What is happening?!"
            fullWidth 
            multiline
            rows={2}
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            sx={{ marginTop: '10px', paddingRight: '1rem' }} 
          />
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
            <Box display='flex' alignItems='center' sx={{ gap: '1rem' }}>
              <IconButton>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="add-photo"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
                <label htmlFor="add-photo">
                  <AddPhotoAlternateIcon fontSize='small' />
                </label>
              </IconButton>
              
              <IconButton>
                <EmojiEmotionsIcon fontSize='small' />
              </IconButton>
              <IconButton>
                <GifIcon fontSize='medium' />
              </IconButton>
              <IconButton>
                <LocationOnIcon fontSize='medium' />
              </IconButton>
            </Box>
            
            <Box sx={{ marginLeft: 'auto' }}>
              <Button 
                variant='contained' 
                sx={{ borderRadius: '20px', backgroundColor: '#188CD8' }}
                onClick={handleSubmit}
              >
                Post
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography fontSize={8} variant='body2' sx={{ marginRight: '1rem' }}>
                {fileNames}
              </Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderTwit;
