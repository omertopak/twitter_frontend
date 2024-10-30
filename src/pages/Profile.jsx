import React from 'react'
import {Stack , Grid} from '@mui/material'
import Rightbar from '../components/Rightbar'
import Leftbar from '../components/Leftbar'
import HeaderTwit from '../components/HeaderTwit';
import HeaderProfile from '../components/HeaderProfile'
import useTweetCall from '../hooks/useTweetCall';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import useUserCall from '../hooks/useUserCall'
const Profile = () => {

  
  const {userTweets} = useTweetCall()
  const {getUser} = useUserCall()

  useEffect(() => {
    // console.log("homedaki clg");
    userTweets()
    console.log('useefect calisti');
  }, [])

  
  return (
   
      <Grid minWidth='md' container direction="row"  justifyContent='center' spacing={0} wrap='nowrap'>
      <Grid item  sx={{width: { xs:'270px',sm:'270px',md:'270px',lg:'270px',xl:'270px' },marginLeft:'105px'}}>
        <Leftbar />
      </Grid>

      {/* <Grid item xs={8} lg={8} md={7} sm={9}>  */}
      <Grid item sx={{width: { xs:'610px',sm:'610px',md:'610px',lg:'610px',xl:'610px',}}} > 
        <Stack >
          <HeaderProfile/>
        </Stack>
        <Outlet/>
      </Grid>

      <Grid item sx={{width: { xs:'340px',sm:'340px',md:'340px',lg:'340px',xl:'350px' },marginLeft:'35px'}}> 
        <Rightbar/>
      </Grid>
       
         
       
      </Grid>
      // </Container>
  )
}

export default Profile

//.