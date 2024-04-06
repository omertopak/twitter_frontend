import React from 'react'
import { Box, Container, Stack , Grid} from '@mui/material'


import Middleflow from '../components/Middleflow'
import Rightbar from '../components/Rightbar'
import Leftbar from '../components/Leftbar'
import HeaderTwit from '../components/HeaderTwit';

const Home = () => {
  return (
    // <Container maxWidth="md" >
    //   <Stack direction="row" spacing={1} justifyContent="space-around">
    //     <Leftbar/>
    //       <Stack >
    //         <HeaderTwit/>
    //         <Middleflow/>
    //       </Stack>
    //     <Rightbar/>
    //   </Stack>
    //   </Container>
    
     <Container maxWidth="xl" >
      <Grid minWidth='sm' container direction="row"  justifyContent='space-evenly' spacing={0} wrap='nowrap'>
      <Grid item >
        <Leftbar/>
      </Grid>

      <Grid item xs={4} sm={5} md={5}> 
        <Stack >
          <HeaderTwit/>
          <Middleflow/>
        </Stack>
      </Grid>

      <Grid item > 
        <Rightbar/>
      </Grid>
       
         
       
      </Grid>
      </Container>
  )
}

export default Home