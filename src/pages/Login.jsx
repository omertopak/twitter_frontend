import { Box, Grid } from '@mui/material'
import React from 'react'
import logo from '../assets/logo_x.png'
import { logoCenter } from '../styles/theme'

const Login = () => {
  return (
    <Grid container spacing={0} sx={{ height: "100vh", alignItems: "center", flexDirection: 'row', flexWrap: 'nowrap' }}>
  <Grid item md={4} sx={{ width: 'auto', display: { xs: 'none', sm: 'block' }}}>
    <img
      src={logo}
      alt="xLogo"
      width="auto"
      style={{ display: "block", padding: "1vw", width: '100%' }}
    />
  </Grid>
  <Grid item sx={{ width: '700px', marginLeft: 'auto' }}>
    {/* İkinci öğe içeriği */}
  </Grid>
</Grid>

  );
}

export default Login