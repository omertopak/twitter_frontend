import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modal } from '../styles/theme';
import { TextField, IconButton, Avatar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { iconAndText1 } from '../styles/theme';
import useTweetCall from '../hooks/useTweetCall';

// Icons
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelIcon from '@mui/icons-material/Cancel';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// Utility function for image preview
const getImagePreviewUrl = (file) => {
  return URL.createObjectURL(file);
};

export default function ReplyTweet({tweetData}) {
 
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleOpen = (e) => {
    e?.stopPropagation();
    setOpen(true);
  };
  
  const handleClose = (e) => {
    e?.stopPropagation();
    setOpen(false);
  };
  
  
  const { pushreply } = useTweetCall();

  

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const CHARACTER_LIMIT = 120;

  // Media Query
  const isSmallScreen = useMediaQuery('(max-width:1280px)');
  const [drawerOpen, setDrawerOpen] = useState(!isSmallScreen);

  useEffect(() => {
    setDrawerOpen(!isSmallScreen);
  }, [isSmallScreen]);

  const [tweetText, setTweetText] = useState('');

  const [selectedImages, setSelectedImages] = useState([]);
  const [fileNames, setFileNames] = useState('');
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
    formData.append('tweetId', tweetData._id);
    formData.append('tweet', tweetText);
    selectedImages.forEach((file) => {
        formData.append('image', file);
    });
    const tweetId = tweetData._id
    
    pushreply(tweetId,formData);
    //!burada data gidiyor ama alamiyorumms anirim tweet undefined donuyor
    // console.log('Tweet:', tweetText);
    // console.log('Tweet ID:', tweetData._id);
    // console.log('Form Data:', formData.get('tweet'), formData.get('tweetId'));
    setTweetText('');
    setSelectedImages([]);
    setFileNames('');
    setOpen(false)
  };

  return (
    <div>
      {/* {isSmallScreen ? 
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
      } */}
        <Button onClick={(e) => { e.stopPropagation();  handleOpen(); }}  sx={iconAndText1}>
            <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
        <Typography>{tweetData?.reply_count}</Typography>
            </Button >
        <Modal
        open={open}
        onClose={(e) => handleClose(e)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClick={(e) => e.stopPropagation()} sx={modal}>
          <Box> 
          <Box sx={{display:'flex', alignItems:'center',marginLeft:'-15px'}}>
          <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin: '1rem' }} />
          <Typography variant="subtitle1" component="h6">{tweetData.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@{tweetData.user?.username}</Typography>
          </Box> 
            <Box>
            <Typography 
            sx={{ 
            width: '100%', 
            overflow: 'hidden', 
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3, // 3 satırla sınırlandır
            lineClamp: 3, // 3 satırla sınırlandır
            }}
            >{tweetData?.tweet}</Typography> 
            </Box>
          </Box>
          <Box width='100%'>
            <TextField 
              inputProps={{ maxlength: CHARACTER_LIMIT }}
              id="standard-basic"  
              variant="standard"
              placeholder="Post your reply"
              value={tweetText}
              helperText={`${tweetText.length}/${CHARACTER_LIMIT}`}
              onChange={(e) => setTweetText(e.target.value)}
              fullWidth 
              multiline
              rows={2}
              sx={{ marginTop: '10px', paddingRight: '1rem' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginBottom: '10px' }}>
              <Box >
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
                <Button variant='contained' sx={{ borderRadius: '20px' }}
                onClick={handleSubmit}
                >
                  Post
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {images?.map((image, index) => (
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
