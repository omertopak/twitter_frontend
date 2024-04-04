import React from 'react'
import { Avatar, Box, Button, Typography } from '@mui/material';
import { bracketter, bracketter2 } from '../styles/theme';

//icons
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IosShareIcon from '@mui/icons-material/IosShare';
const Twit = () => {
  return (
    <Box sx={[{display:'flex'},bracketter]}>
      <Box sx={[{display:'flex'},]}> 
        {/* //!avatari ekle */}
        <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]}> 
        <Box display='flex'>
          <Typography variant="subtitle1" component="h6">Ozgur demirtas</Typography>
        <Typography variant="subtitle1" component="h6">@Profdemirtas</Typography>
        </Box>
        <Typography>TWIt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem deserunt quaerat veniam voluptatem vitae error inventore, commodi sapiente reprehenderit voluptatum perferendis molestiae ducimus tempore temporibus animi! Ad esse reiciendis minima hic molestias? Dolorem voluptatum quam nemo reiciendis quae quasi velit?</Typography>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
       
       <Button>
            <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon><Typography>20</Typography>
        </Button>
        <Button>
            <SwapCallsIcon fontSize='small'></SwapCallsIcon><Typography>12</Typography>
        </Button>
        <Button>
            <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon><Typography>243</Typography>
        </Button>
        <Button>
            <BarChartIcon fontSize='small'></BarChartIcon><Typography>32</Typography>
        </Button>
       
        <Box>
          <Button>
            <TurnedInNotIcon fontSize='small'></TurnedInNotIcon><Typography></Typography>
        </Button>
        <Button>
            <IosShareIcon fontSize='small'></IosShareIcon><Typography></Typography>
        </Button>
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