import { Box, Grid } from '@mui/material'
import React from 'react'
import logo from '../assets/logo_x.png'
import { logoCenter } from '../styles/theme'

const Login = () => {
  return (
    <Grid container spacing={0} sx={{ height: "100vh", alignItems: "center",flexDirection: 'row' }}>
      <Grid item md={4} sx={{width:'auto',display: { sm: 'none', md: 'block' }}} >
        <img
          src={logo}
          alt="xLogo"
          width="auto"
          style={{ display: "block", padding: "1vw", width:'100%' }}
        />
      </Grid>
      <Grid item sx={{width:'600px', marginLeft:'auto'}}  >
      as;dk;alsd;alsd
      </Grid>
    </Grid>
  );
}

export default Login