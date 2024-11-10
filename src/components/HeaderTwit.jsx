import React, { useState, useEffect } from 'react';
import { Avatar, Box, IconButton, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';
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
  
  const [selectedButton, setSelectedButton] = useState('/home');
  const [tweetText, setTweetText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [fileNames, setFileNames] = useState('');
  
  // State for Snackbar visibility
  const [openSnackbar, setOpenSnackbar] = useState(false);

  

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 4) {
      alert('You can only upload up to 4 images.');
      return;
    }
    setSelectedImages(files);
    setFileNames(files.map(file => file.name).join(', '));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('tweet', tweetText);
    
    selectedImages.forEach((file) => {
      formData.append('image', file);
    });

    newTweet(formData);
    console.log('Form data prepared:', formData);

    // Clear the input fields after submission
    setTweetText('');
    setSelectedImages([]);
    setFileNames('');

    // Show Snackbar notification
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const CHARACTER_LIMIT = 120;

  // ALTI CIZILI FOR YOU AND FOLLOWING
  
  useEffect(() => {
    // Sayfa yenilendiğinde URL'ye göre buton seçimini yap
    const currentPath = window.location.pathname;  // URL'deki mevcut yolu al
    if (currentPath.includes('following')) {
      setSelectedButton('/home/following');
    } else {
      setSelectedButton('/home');
    }
  }, []);
  const handleClick = (path) => {
    setSelectedButton(path);
    window.location.pathname = path; 
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
          onClick={() => handleClick('/home/following')}
          sx={selectedButton === '/home/following' ? menuButtonSelected : menuButton}
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
            inputProps={{ maxlength: CHARACTER_LIMIT }}
            helperText={`${tweetText.length}/${CHARACTER_LIMIT}`}
            onChange={(e) => setTweetText(e.target.value)}
            sx={{ marginTop: '10px', paddingRight: '1rem' }} 
          />
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px', width:'95%' }}>
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

      {/* Snackbar Component */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%', color:'white',backgroundColor:'#188CD8' }}>
          You just posted a tweet!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HeaderTwit;
