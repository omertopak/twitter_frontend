import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modal } from '../styles/theme';
import { TextField,IconButton,Avatar } from '@mui/material';
//icons.
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import LocationOnIcon from '@mui/icons-material/LocationOn';


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
  return (
    <div>
      <Button  
      onClick={handleOpen}
      variant='contained' sx={{borderRadius:'20px',width:'100%',padding:'10px',marginTop:'5px'}} >
            Post
      </Button>
      
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