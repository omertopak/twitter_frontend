import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Following = () => {

  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {getTimeline} = useTweetCall()

  useEffect(() => {
    getTimeline()
    console.log('useefect following calisti');
  }, [])
  //! FOLLOWING TWEETS BASILACAK========= ========= ========= ========= ========= ========= ========= ========= 
  const {following} = useSelector((state)=>state.tweet)

  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      {following.map((tweet)=>tweet.reposted_by ? 
      <Twit tweet={tweet}/> : <Retweet tweet={tweet}/>)}
        {/* <Twit/> */}
        {/* <Retweet/> */}
    </Box>
  )
}

export default Following