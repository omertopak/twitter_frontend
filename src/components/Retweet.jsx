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

//calls
import useTweetCall from '../hooks/useTweetCall';
import ReplyTweet from './ReplyTweet';

const Retweet = ({tweet}) => {

  const [open, setOpen] = React.useState(false);
  const { reTweet,tweetLike,bookmark } = useTweetCall()
  
  const handleRetweet=(id)=> {
    reTweet(id)
    
  }
  const handleLike=(id)=> {
    tweetLike(id)
    
  }
  const handleBookmark=(id)=> {
    bookmark(id)
  }


  return (
    <Box sx={[{display:'flex'},bracketter]}>
      <Box > 
        {/* //!avatari ekle */}
        <Avatar alt="X" src={tweet.user?.image} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={{justifyContent:'space-evenly',width:'90%'}} padding={2}>       
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
            <Avatar alt="X" src={tweet?.repliedTo?.user?.image} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
        </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={1}>
       
        <Box sx={{display:'flex',justifyContent:'space-between'}} >
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">{tweet?.repliedTo?.user?.first_name}</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@{tweet?.repliedTo?.user?.username}</Typography>
          </Box> 
        </Box>
        <ImageBox images={tweet?.repliedTo?.images}/>
        <Typography 
        sx={{ 
          width: '100%', 
          overflow: 'hidden', 
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3, // 3 satırla sınırlandır
          lineClamp: 3, // 3 satırla sınırlandır
        }}
        >{tweet?.repliedTo?.tweet}</Typography>
        </Box>
        
        </Box>

        {/* //? IconButtons */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <ReplyTweet  open={open} setOpen={setOpen} tweetData={tweet}/>
            {/* <Button sx={iconAndText1}>
                    <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
                <Typography>{tweet?.reply_count}</Typography>
            </Button > */}
            <Button onClick={() => handleRetweet(tweet._id)} sx={iconAndText2}>
                    <SwapCallsIcon fontSize='small'></SwapCallsIcon>
                <Typography>{tweet?.repost_count}</Typography>
            </Button>
            <Button onClick={() => handleLike(tweet._id)} sx={iconAndText3}>
                    <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
                <Typography>{tweet?.favorite_count}</Typography>
            </Button>
            <Button sx={iconAndText4}>
                    <BarChartIcon fontSize='small'></BarChartIcon>
                    <Typography>{tweet?.tweet_view_count}</Typography>
            </Button>
        <Box>
        <Button onClick={() => handleBookmark(tweet._id)} sx={iconAndText5}>
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
