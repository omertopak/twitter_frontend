import * as React from 'react';

import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modal } from '../styles/theme';
import { TextField,IconButton,Avatar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

//icons.
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BorderColorIcon from '@mui/icons-material/BorderColor';



export default function PostModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const CHARACTER_LIMIT = 100;
  const [values, setValues] = React.useState({
    tweet: ""
  });
  const handleChange = tweet => event => {
    setValues({ ...values, [tweet]: event.target.value });
  };

  //*MediaQuery========================
  const isSmallScreen = useMediaQuery('(max-width:1280px)');
  const [drawerOpen, setDrawerOpen] = useState(!isSmallScreen); // Küçük ekranlarda varsayılan olarak kapalı, büyük ekranlarda açık
  useEffect(() => {
    setDrawerOpen(!isSmallScreen); // Ekran boyutu değiştiğinde drawerOpen durumunu güncelle
  }, [isSmallScreen]);
  //*MediaQuery========================
  return (
    <div>
      {isSmallScreen ? 
      <Button  
      onClick={handleOpen}
      variant='contained' sx={{borderRadius:'40px',backgroundColor:'#188CD8',padding:'10px',marginTop:'5px',minWidth: 'auto', width: 'auto',marginLeft:'5px'}} ><BorderColorIcon>
      </BorderColorIcon></Button>
      :
      <Button  
      onClick={handleOpen}
      variant='contained' sx={{borderRadius:'20px',backgroundColor:'#188CD8',width:'90%',padding:'10px',marginTop:'5px',marginLeft:'10px'}} >
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
        <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
   
    <Box width='100%'>
        <TextField 
        inputProps={{
          maxlength: CHARACTER_LIMIT
        }}
        value={values.tweet}
        helperText={`${values.tweet.length}/${CHARACTER_LIMIT}`}
        onChange={handleChange("tweet")}
        id="standard-basic"  
        variant="standard"
        placeholder="What is happening?!"
        fullWidth 
        multiline
        rows={2}
        sx={{marginTop:'10px',paddingRight:'1rem'}} />
        <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'10px',marginBottom:'10px'}}>
        <Box >
        <IconButton >
            <AddPhotoAlternateIcon fontSize='small'></AddPhotoAlternateIcon>
        </IconButton>
        <IconButton >
            <EmojiEmotionsIcon fontSize='small'></EmojiEmotionsIcon>
        </IconButton>
        <IconButton >
            <GifIcon fontSize='medium'></GifIcon>
        </IconButton>
        <IconButton >
            <LocationOnIcon fontSize='medium'></LocationOnIcon>
        </IconButton>
        </Box>
        <Box sx={{marginRight:'1rem'}}>
          <Button  variant='contained' sx={{borderRadius:'20px'}}>
            Post
          </Button>
        </Box>
        </Box>
    </Box>

    
  </Box>
      </Modal>
    </div>
  );
}




 {/* <Box sx={modal}>
          <Box sx={{display:'flex'}}>
        <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
        <TextField 
        id="standard-basic"  
        variant="standard"
        placeholder="What is happening?!"
        fullWidth 
        multiline
        rows={2}
        sx={{marginTop:'10px',paddingRight:'1rem'}} />
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'10px',marginBottom:'10px'}}>
        <Box >
        <IconButton >
            <AddPhotoAlternateIcon fontSize='small'></AddPhotoAlternateIcon>
        </IconButton>
        <IconButton >
            <EmojiEmotionsIcon fontSize='small'></EmojiEmotionsIcon>
        </IconButton>
        <IconButton >
            <GifIcon fontSize='medium'></GifIcon>
        </IconButton>
        <IconButton >
            <LocationOnIcon fontSize='medium'></LocationOnIcon>
        </IconButton>
        </Box>
        <Box sx={{marginRight:'1rem'}}>
          <Button  variant='contained' sx={{borderRadius:'20px'}}>
            Post
          </Button>
        </Box>
        </Box>
        </Box> */}