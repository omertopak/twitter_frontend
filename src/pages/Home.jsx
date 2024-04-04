import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';


import Middleflow from '../components/Middleflow'
import Rightbar from '../components/Rightbar'
import Leftbar from '../components/Leftbar'
import HeaderTwit from '../components/HeaderTwit';

const Home = () => {
  return (
    <Container maxWidth="md" >
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Leftbar />
          <Stack sx={{ width: '100%' }}>
            <HeaderTwit/>
            <Middleflow/>
          </Stack>
        <Rightbar/>
        </Stack>
      </Container>
  )
}

export default Home