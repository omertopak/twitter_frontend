import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo_x.png'
import { logoCenter } from '../styles/theme'
import GoogleIcon from '@mui/icons-material/Google';
const Login = () => {
  return (
    <Grid container spacing={0} sx={{ height: "100vh", alignItems: "center", flexDirection: 'row', flexWrap: 'nowrap' }}>
  <Grid item md={4} sx={{ width: 'auto', display: { xs: 'none', sm: 'block' }}}>
    <img
      src={logo}
      alt="xLogo"
      // width="auto"
      style={{ 
        display: "inline-block", 
        padding: "1vw", 
        width: '100%' }}
    />
  </Grid>
  <Grid item sx={{ width: '700px', marginLeft: 'auto' }}>
    <Typography variant='h2' sx={{marginBottom:'50px'}}>Happening Now</Typography>
    <Typography variant='h3' sx={{marginBottom:'30px'}}>Join today.</Typography>
    <Button  variant='contained' startIcon={<GoogleIcon />}  sx={{borderRadius:'20px',width:'300px',marginTop:'5px',textTransform: 'none',backgroundColor:'white',color:'black',display:'flex',alignItems:'center',marginBottom:'6px'}} > Sign Up With Google</Button>
    <Box sx={{width:'300px',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
    <Box sx={{border:'1px solid grey', width:'130px',height:'0px'}}></Box>
      <Typography>
      or
    </Typography>
    <Box sx={{border:'1px solid grey', width:'130px',height:'0px'}}></Box>
    </Box>
    <Button  variant='contained' sx={{borderRadius:'20px',width:'300px',marginTop:'5px',textTransform: 'none',display:'block'}} >Create Account</Button>
    {/* onClick={handlePostClick} */}
    <Box sx={{marginTop:'100px'}}>
      <Typography sx={{marginBottom:'20px'}}>Already have an account? </Typography>
      <Button  variant='contained' sx={{borderRadius:'20px',width:'300px',marginTop:'5px',textTransform: 'none',display:'block',backgroundColor:'transparent',color:'#188CD8'}} > Sign in</Button>
    </Box>
  </Grid>
</Grid>

  );
}

export default Login