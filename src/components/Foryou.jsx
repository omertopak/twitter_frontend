import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Foryou = () => {

  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {getTimeline2} = useTweetCall()

  useEffect(() => {
    getTimeline2()
    console.log('useefect calisti');
  }, [])

  const {tweets} = useSelector((state)=>state.tweet)
  // console.log("tweets",tweets);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      {tweets.map((tweet)=>tweet.reposted_by ? 
      <Twit tweet={tweet}/> : <Retweet tweet={tweet}/>)}
        {/* <Twit/> */}
        {/* <Retweet/> */}
    </Box>
  )
}

export default Foryou