import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';


const Following = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');

  const {getTimeline} = useTweetCall()
  useEffect(() => {
    // console.log("homedaki clg");
    getTimeline()
    console.log('useefect calisti');
  }, [])

  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
        <Twit/>
        {/* <Retweet/> */}
    </Box>
  )
}

export default Following