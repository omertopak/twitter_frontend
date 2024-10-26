import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Replied from './Replied';

const Foryou = () => {

  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {getTimeline2} = useTweetCall()

  useEffect(() => {
    getTimeline2()
    console.log('useefect calisti');
  }, [])

  const {tweets} = useSelector((state)=>state.tweet)
  const {userId} = useSelector((state)=>state.auth)
  // console.log("tweets",tweets);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {tweets.map((tweet) => {
      const hasReposted = tweet.reposted_by && Object.keys(tweet.reposted_by).length > 0;
      const hasLiked = tweet.favorites && Object.keys(tweet.favorites).length > 0;
      const hasBookmarked = tweet.bookmarks && Object.keys(tweet.bookmarks).length > 0;

      const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

      // currentUser reposted_by içinde var mı kontrolü
      const isCurrentUserReposted =hasReposted && tweet.reposted_by.includes(userId);
      const isCurrentUserliked =hasLiked && tweet.favorites.includes(userId);
      const isCurrentUserbookmarked =hasBookmarked && tweet.bookmarks.includes(userId);
        
      // console.log(tweet.reposted_by);
      // console.log(userId);
        // console.log(isCurrentUserReposted);
        
        // bazen retweet bazen tweet olarak basmak icin sans algoritmasi
        const showAsRetweeted = Math.random() > 0.5;
      return (hasReposted || hasReplied) ?

            (hasReposted ?
            (showAsRetweeted ? 
            <Twit tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/> :
            <Retweet tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/>) : 
            <Replied tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/>) : 

        <Twit tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/>;
    })}


    </Box>
  )
}

export default Foryou