import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Replied from './Replied';
import { useParams } from 'react-router-dom';

const MyTweets = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {userTweets} = useTweetCall()
  const {userId} = useSelector((state)=>state.auth)
  const  ProfilePageId  = useParams();
  const IsUser = (userId === ProfilePageId.userId);
  // console.log("isuser",IsUser);
  const profileInfoData = IsUser ? userId : ProfilePageId.userId ;
  
  useEffect(() => {
    userTweets(profileInfoData)
    // console.log('useefect calisti');
  }, [profileInfoData])

  const { AnyUserTweets = [] } = useSelector((state) => state.profile || {});
  
  // console.log("MyTweets",AnyUserTweets);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {AnyUserTweets.map((tweet) => {
      const hasReposted = tweet.reposted_by && Object.keys(tweet.reposted_by).length > 0;
      const hasLiked = tweet.favorites && Object.keys(tweet.favorites).length > 0;
      const hasBookmarked = tweet.bookmarks && Object.keys(tweet.bookmarks).length > 0;
      const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

      // currentUser reposted_by içinde var mı kontrolü
      const isCurrentUserReposted =hasReposted && tweet.reposted_by.includes(userId);
      const isCurrentUserliked =hasLiked && tweet.favorites.includes(userId);
      const isCurrentUserbookmarked =hasBookmarked && tweet.bookmarks.includes(userId);
        
      // console.log("1",hasReplied);
      // console.log("2",hasReposted);
      // console.log(userId);
        // console.log(isCurrentUserReposted);
        
        // bazen retweet bazen tweet olarak basmak icin sans algoritmasi
        const showAsRetweeted = Math.random() > 0.5;
        return hasReplied 
        ? <Replied 
            key={tweet._id} 
            tweet={tweet} 
            isCurrentUserReposted={isCurrentUserReposted} 
            isCurrentUserliked={isCurrentUserliked} 
            isCurrentUserbookmarked={isCurrentUserbookmarked} 
          />
        : <Twit 
            key={tweet._id} 
            tweet={tweet} 
            isCurrentUserReposted={isCurrentUserReposted} 
            isCurrentUserliked={isCurrentUserliked} 
            isCurrentUserbookmarked={isCurrentUserbookmarked} 
          />;
      
    })}


    </Box>
  )
}

export default MyTweets