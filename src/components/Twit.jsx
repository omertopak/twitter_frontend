import React from 'react'
import { Avatar, Box, Button, Typography,IconButton } from '@mui/material';
import { bracketter } from '../styles/theme';
import { iconAndText1 } from '../styles/theme';
import { iconAndText2 } from '../styles/theme';
import { iconAndText3 } from '../styles/theme';
import { iconAndText4 } from '../styles/theme';
import { iconAndText5 } from '../styles/theme';
import { iconAndText6 } from '../styles/theme';
import ImageBox from './ImageBox';
//icons
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Twit = ({tweet}) => {


  return (
    
    <Box sx={[{display:'flex'},bracketter]}>
      
      <Box sx={[{display:'flex'},]}> 
        {/* //!avatari ekle */}
        <Avatar alt="X" src={tweet?.user?.images} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={{justifyContent:'space-evenly',width:'90%'}} padding={2}>
       
        <Box display='flex' justifyContent='space-between'>
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">{tweet.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@{tweet.user?.username}</Typography>
          </Box> 
          <IconButton >
            <MoreHorizIcon fontSize='small'></MoreHorizIcon>
          </IconButton>
        </Box>

        <ImageBox images={tweet?.images}/>
        {/* //!BURADA MAXWIDTH PROBLEM */}
        <Typography 
        sx={{ 
          width: '100%', 
          overflow: 'hidden', 
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3, // 3 satırla sınırlandır
          lineClamp: 3, // 3 satırla sınırlandır
        }}
        >{tweet?.tweet}</Typography>
        
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Button sx={iconAndText1}>
       
            <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
        <Typography>{tweet?.reply_count}</Typography>
            </Button >
        <Button sx={iconAndText2}>
            <SwapCallsIcon  fontSize='small'></SwapCallsIcon>
        <Typography>{tweet?.repost_count}</Typography>
        </Button >
        <Button sx={iconAndText3}>
            <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
        <Typography >{tweet?.favorite_count}</Typography>
        </Button >
        <Button sx={iconAndText4}>
            <BarChartIcon fontSize='small'></BarChartIcon>
        <Typography>{tweet?.tweet_view_count}</Typography>
        </Button >
        <Box>
        <Button sx={iconAndText5}>
            <TurnedInNotIcon fontSize='small'></TurnedInNotIcon>
        </Button >
        <Button sx={iconAndText6}>
            <IosShareIcon fontSize='small'></IosShareIcon>
        </Button >
        </Box>
        </Box>
        
      </Box>
      
  
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