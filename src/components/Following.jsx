import React from 'react'
import { Box } from '@mui/material'
import Twit from './Twit'
import Retweet from './Retweet'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTweetCall from '../hooks/useTweetCall';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Replied from './Replied';
import CircularProgress from '@mui/material/CircularProgress';

const Following = () => {
  //*INFINITIVE SCROLL
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const {following} = useSelector((state)=>state.tweet)
  const {userId} = useSelector((state)=>state.auth)
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const {getTimeline} = useTweetCall()

  useEffect(() => {
    if (!following.length) {
      getTimeline(); // Sayfa yenilendiğinde veri çekmek
    } else {
      setData((prevData) => [...prevData, ...following]);
    }
  }, [following,page]);
  useEffect(() => {
    const fetchMoreData = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10
      ) {
        getTimeline(); 
        setLoading(true);
        setPage((prevPage) => prevPage + 1); // Sayfa sayısını artır
      }
    };
  
    window.addEventListener('scroll', fetchMoreData);
    return () => window.removeEventListener('scroll', fetchMoreData);
  }, []);

  console.log("following",following);
  return (
    <Box sx={{
      width: isSmallScreen ? '80vw' : '610px',
      minWidth:'430px'
    }}>
      
      {data.map((tweet) => {
  const hasReposted = tweet.reposted_by && Object.keys(tweet.reposted_by).length > 0;
  const hasLiked = tweet.favorites && Object.keys(tweet.favorites).length > 0;
  const hasBookmarked = tweet.bookmarks && Object.keys(tweet.bookmarks).length > 0;
  const hasReplied = tweet.repliedTo && Object.keys(tweet.repliedTo).length > 0;

  // currentUser reposted_by içinde var mı kontrolü
  const isCurrentUserReposted =hasReposted && tweet.reposted_by.includes(userId);
  const isCurrentUserliked =hasLiked && tweet.favorites.includes(userId);
  const isCurrentUserbookmarked =hasBookmarked && tweet.bookmarks.includes(userId);
    

    const showAsRetweeted = Math.random() > 0.5;
  return (hasReposted || hasReplied) ?

        (hasReposted ?
        (showAsRetweeted ? 
        <Twit key={tweet._id} tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/> :
        <Retweet key={tweet._id} tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/>) : 
        <Replied key={tweet._id} tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/>) : 

    <Twit key={tweet._id} tweet={tweet} isCurrentUserReposted={isCurrentUserReposted} isCurrentUserliked={isCurrentUserliked} isCurrentUserbookmarked={isCurrentUserbookmarked}/>;
})}
     {loading &&  <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'center' }}>
      <CircularProgress />
    </Box>}
    </Box>
  )
}

export default Following