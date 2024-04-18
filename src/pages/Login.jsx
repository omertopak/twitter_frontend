import { Box, Grid } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Grid container spacing={0}>
  <Grid item xs={8}>
    <Box sx={{color:'red'}}>xs=8</Box>
  </Grid>
  <Grid item xs={4}>
    <Box>xs=4</Box>
  </Grid>
  <Grid item xs={4}>
    <Box>xs=4</Box>
  </Grid>
  <Grid item xs={8}>
    <Box>xs=8</Box>
  </Grid>
</Grid>
  )
}

export default Login