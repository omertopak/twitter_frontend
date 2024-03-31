import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';


import Middleflow from '../components/Middleflow'
import Rightbar from '../components/Rightbar'
import Leftbar from '../components/Leftbar'
import Twit from '../components/Twit'

const Home = () => {
  return (
    <Container maxWidth="md" >
      <Stack direction="row" spacing={0} justifyContent="space-around">
        <Leftbar />
          <Stack sx={{ width: '100%' }}>
            <Twit/>
            <Middleflow/>
          </Stack>
        <Rightbar/>
        </Stack>
      </Container>
  )
}

export default Home