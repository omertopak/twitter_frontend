import React from 'react'
import { Avatar, Box, Button, TextField } from '@mui/material';
import { bracketter } from '../styles/theme';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const HeaderTwit = () => {
  return (
    <Box>
      <Box display='flex' sx={[bracketter,{justifyContent:'space-evenly'}]}> 
        <Button >For you</Button>
        <Button >Following</Button>
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
        sx={{marginTop:'10px',paddingRight:'1rem'}} />
        <Button >
            <AddPhotoAlternateIcon fontSize='small'></AddPhotoAlternateIcon>
        </Button>
        <Button >
            <EmojiEmotionsIcon fontSize='small'></EmojiEmotionsIcon>
        </Button>
    </Box>
    
  </Box>
  </Box>
  )
}

export default HeaderTwit