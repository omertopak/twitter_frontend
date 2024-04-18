import { Box, Grid } from '@mui/material'
import React from 'react'
import logo from '../assets/logo_x.png'
import { logoCenter } from '../styles/theme'

const Login = () => {
  return (
    <Grid container spacing={0} sx={{ height: "100vh", alignItems: "center" }}>
      <Grid item xs={7}>
        <img
          src={logo}
          alt="xLogo"
          width="100%"
          style={{ display: "block", margin: "auto" }}
        />
      </Grid>
      <Grid item xs={5}></Grid>
    </Grid>
  );
}

export default Login