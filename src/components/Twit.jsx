import React from 'react'
import { Avatar, Box, Button, Typography,IconButton } from '@mui/material';
import { bracketter, CircleButton } from '../styles/theme';


//icons
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Twit = () => {
  return (
    <Box sx={[{display:'flex'},bracketter]}>
      <Box sx={[{display:'flex'},]}> 
        {/* //!avatari ekle */}
        <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={2}>
       
        <Box display='flex' justifyContent='space-between'>
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">Ozgur demirtas</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@Profdemirtas</Typography>
          </Box> 
          <IconButton >
            <MoreHorizIcon fontSize='small'></MoreHorizIcon>
          </IconButton>
        </Box>
        <Typography >TWIt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem deserunt quaerat veniam voluptatem vitae error inventore, commodi sapiente reprehenderit voluptatum perferendis molestiae ducimus tempore temporibus animi! Ad esse reiciendis minima hic molestias? Dolorem voluptatum quam nemo reiciendis quae quasi velit?</Typography>
        
        
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
       <IconButton>
            <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon><Typography>20</Typography>
        </IconButton>
        <IconButton>
            <SwapCallsIcon fontSize='small'></SwapCallsIcon><Typography>12</Typography>
        </IconButton>
        <IconButton>
            <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon><Typography>243</Typography>
        </IconButton>
        <IconButton>
            <BarChartIcon fontSize='small'></BarChartIcon><Typography>32</Typography>
        </IconButton>
       
        <Box>
          <IconButton>
            <TurnedInNotIcon fontSize='small'></TurnedInNotIcon>
        </IconButton>
        <IconButton>
            <IosShareIcon fontSize='small'></IosShareIcon>
        </IconButton>
        </Box>
        </Box>
        
      </Box>
      
    {/* <Box sx={[{display:'flex',gap:'1rem'},bracketter]}>
   
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
    
  </Box> */}
  </Box>
  )
}

export default Twit

// tweet: 
// image: 
// user: 
// repliedTo:
// replies:
// reply_count:
// reposted_by:
// repost_count:
// tweet_viewers:
// tweet_view_count:
// favorites:
// favorite_count: