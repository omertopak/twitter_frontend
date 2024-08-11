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
const Retweet = () => {

  const images = [
    "/images/twitter_x_new_logo_x_rounded_icon_256078.png",
  ]


  return (
    <Box sx={[{display:'flex'},bracketter]}>
      <Box > 
        {/* //!avatari ekle */}
        <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
      </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={2}>
       
        <Box display='flex' justifyContent='space-between'>
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">Ozgur demirtas</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@Profdemirtas</Typography>
          </Box> 
        <IconButton>
            <MoreHorizIcon fontSize='small'></MoreHorizIcon>
        </IconButton>
        </Box>
        <ImageBox images={images}/>
        <Typography >Retweet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem deserunt quaerat veniam voluptatem vitae error inventore, commodi sapiente reprehenderit voluptatum perferendis molestiae ducimus tempore temporibus animi! Ad esse reiciendis minima hic molestias? Dolorem voluptatum quam nemo reiciendis quae quasi velit?</Typography>
        
        {/* //?ALINTI KISIM */}

        
        <Box sx={{display:'flex',border:1,borderColor:'grey.500',borderRadius:'16px', margin:'2'}}>
        <Box > 
        {/* //!avatari ekle */}
            <Avatar alt="X" src={{}} sx={{ width: '2rem', height: '2rem', margin:'1rem' }}/>
        </Box>
      <Box  sx={[{justifyContent:'space-evenly'}]} padding={1}>
       
        <Box sx={{display:'flex',justifyContent:'space-between'}} >
          <Box sx={{display:'flex'}}>
          <Typography variant="subtitle1" component="h6">Omer Topak</Typography>
          <Typography variant="subtitle1" component="h6" color='gray'>@Omertopak</Typography>
          </Box> 
        </Box>
        <ImageBox images={images}/>
        <Typography >Retweet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem deserunt quaerat veniam voluptatem vitae error inventore, commodi sapiente reprehenderit voluptatum perferendis molestiae ducimus tempore temporibus animi! Ad esse reiciendis minima hic molestias? Dolorem voluptatum quam nemo reiciendis quae quasi velit?</Typography>
        </Box>
        </Box>

        {/* //? IconButtons */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Button sx={iconAndText1}>
                    <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
                <Typography>20</Typography>
            </Button >
            <Button sx={iconAndText2}>
                    <SwapCallsIcon fontSize='small'></SwapCallsIcon>
                <Typography>12</Typography>
            </Button>
            <Button sx={iconAndText3}>
                    <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
                <Typography>243</Typography>
            </Button>
            <Button sx={iconAndText4}>
                    <BarChartIcon fontSize='small'></BarChartIcon>
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