import React from 'react'
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material';
import { bracketter, transparentButton } from '../styles/theme';
import { iconAndText1 } from '../styles/theme';
import { iconAndText2 } from '../styles/theme';
import { iconAndText3 } from '../styles/theme';
import { iconAndText4 } from '../styles/theme';
import { iconAndText5 } from '../styles/theme';
import { iconAndText6 } from '../styles/theme';


//icons
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Retweet = () => {
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
        <Typography >Retweet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem deserunt quaerat veniam voluptatem vitae error inventore, commodi sapiente reprehenderit voluptatum perferendis molestiae ducimus tempore temporibus animi! Ad esse reiciendis minima hic molestias? Dolorem voluptatum quam nemo reiciendis quae quasi velit?</Typography>
        </Box>
        </Box>

        {/* //? IconButtons */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Button sx={iconAndText1}>
                <IconButton>
                    <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
                </IconButton>
                <Typography>20</Typography>
            </Button >
            <Button sx={iconAndText2}>
                <IconButton>
                    <SwapCallsIcon fontSize='small'></SwapCallsIcon>
                </IconButton>
                <Typography>12</Typography>
            </Button>
            <Button sx={iconAndText3}>
                <IconButton>
                    <FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon>
                </IconButton>
                <Typography>243</Typography>
            </Button>
            <Button sx={iconAndText4}>
                <IconButton>
                    <BarChartIcon fontSize='small'></BarChartIcon>
                </IconButton>
            </Button>
        <Box>
        <Button>
          <IconButton sx={iconAndText5}>
            <TurnedInNotIcon fontSize='small'></TurnedInNotIcon><Typography></Typography>
        </IconButton>
        </Button>
        <Button>
        <IconButton sx={iconAndText6}>
            <IosShareIcon fontSize='small'></IosShareIcon><Typography></Typography>
        </IconButton>
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