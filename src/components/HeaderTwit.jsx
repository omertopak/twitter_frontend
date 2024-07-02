import React,{useState} from 'react'
import { Avatar, Box, IconButton,Button, TextField } from '@mui/material';
import { bracketter,menuButton,menuButtonSelected } from '../styles/theme';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLocation, useNavigate } from 'react-router-dom';


const HeaderTwit = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const [underlined1, setUnderlined1] = useState(menuButton);
  const [underlined2, setUnderlined2] = useState(menuButtonSelected);

  const handleClick = () => {
    const currentPath = location.pathname;
    console.log('Current Path:', currentPath);
    if (currentPath === '/home') {
      setUnderlined1(menuButton);
      setUnderlined2(menuButtonSelected);
    } else {
      setUnderlined1(menuButtonSelected);
      setUnderlined2(menuButton);
    }
  };
  return (
    <Box >
      <Box display='flex' sx={[bracketter,{justifyContent:'space-evenly',height:'50px'}]}> 
        <Button onClick={()=>{navigate("");handleClick()}}
        sx={[underlined2,{width:'50%'}]}
          >For you</Button>
        <Button 
        sx={[underlined1,{width:'50%'}]}
        onClick={()=>{navigate("following");handleClick()}}>Following</Button>
      </Box>
    <Box sx={[{display:'flex',gap:'1rem'},bracketter]}>
      <Box> 
        <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
   
    <Box width='100%'>
        <TextField 
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
  </Box>
  )
}

export default HeaderTwit