import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Rightbar from '../components/Rightbar';
import Leftbar from '../components/Leftbar';
import { useSelector } from 'react-redux';
import Twit from '../components/Twit';
import useUserCall from '../hooks/useUserCall';

const Bookmarks = () => {
  const { userId } = useSelector((state) => state.auth);
  const { getUser } = useUserCall();
  const { userBookmarks } = useSelector((state) => state.profile);
 

  useEffect(() => {
    // getUser sadece ilk render'da ve userId değiştiğinde çalışır
    const fetchUser = async () => {
      await getUser(userId);
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]); // Sadece userId bağımlılık olarak eklendi

  

  return (
    <Grid minWidth="md" container direction="row" justifyContent="center" spacing={0} wrap="nowrap">
      <Grid item sx={{ width: { xs: '270px', sm: '270px', md: '270px', lg: '270px', xl: '270px' }, marginLeft: '105px' }}>
        <Leftbar />
      </Grid>

      <Grid item sx={{ width: { xs: '610px', sm: '610px', md: '610px', lg: '610px', xl: '610px' } }}>
        {userBookmarks && userBookmarks.length > 0 ? (
          userBookmarks.map((tweet) => {
            const isCurrentUserReposted = tweet.reposted_by.includes(userId);
            const isCurrentUserliked = tweet.favorites.includes(userId);
            const isCurrentUserbookmarked = tweet.bookmarks.includes(userId);
            return (
              <Twit
                key={tweet._id}
                tweet={tweet}
                isCurrentUserReposted={isCurrentUserReposted}
                isCurrentUserliked={isCurrentUserliked}
                isCurrentUserbookmarked={isCurrentUserbookmarked}
              />
            );
          })
        ) : (
          <div>No bookmarks found.</div>
        )}
      </Grid>

      <Grid item sx={{ width: { xs: '340px', sm: '340px', md: '340px', lg: '340px', xl: '350px' }, marginLeft: '35px' }}>
        <Rightbar />
      </Grid>
    </Grid>
  );
};

export default Bookmarks;
