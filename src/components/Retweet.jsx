import React from 'react'
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material';
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
const Retweet = ({tweet}) => {

  const images = [
    "/images/twitter_x_new_logo_x_rounded_icon_256078.png",
  ]


  return (
    <Box sx={[{display:'flex'},bracketter]}>
      <Box > 
        {/* //!avatari ekle */}
        <Avatar alt="X" src={tweet.user?.images} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={2}>
       
        <Box display='flex' justifyContent='space-between'>
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">{tweet.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>{tweet.user?.username}</Typography>
          </Box> 
        <IconButton>
            <MoreHorizIcon fontSize='small'></MoreHorizIcon>
        </IconButton>
        </Box>
        <ImageBox images={tweet?.images}/>
        <Typography >{tweet?.tweet}</Typography>
        
        {/* //?ALINTI KISIM */}

        
        <Box sx={{display:'flex',border:1,borderColor:'grey.500',borderRadius:'16px', margin:'2'}}>
        <Box > 
        {/* //!avatari ekle */}
            <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
        </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={1}>
       
        <Box sx={{display:'flex',justifyContent:'space-between'}} >
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">{tweet.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@{tweet.user?.username}</Typography>
          </Box> 
        </Box>
        <ImageBox images={tweet?.images}/>
        <Typography >{tweet?.tweet}</Typography>
        </Box>
        </Box>

        {/* //? IconButtons */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Button sx={iconAndText1}>
                    <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
                <Typography>{tweet?.reply_count}</Typography>
            </Button >
            <Button sx={iconAndText2}>
                    <SwapCallsIcon fontSize='small'></SwapCallsIcon>
                <Typography>{tweet?.repost_count}</Typography>
            </Button>
            <Button sx={iconAndText3}>
                    <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
                <Typography>{tweet?.favorite_count}</Typography>
            </Button>
            <Button sx={iconAndText4}>
                    <BarChartIcon fontSize='small'></BarChartIcon>
                    <Typography>{tweet?.tweet_view_count}</Typography>
            </Button>
        <Box>
        <Button sx={iconAndText5}>
            <TurnedInNotIcon fontSize='small'></TurnedInNotIcon><Typography></Typography>
        </Button>
        <Button sx={iconAndText6}>
            <IosShareIcon fontSize='small'></IosShareIcon><Typography></Typography>
        </Button>
        </Box>
        </Box>
        
      </Box>
      
  </Box>
  )
}

export default Retweet

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