import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction';
import {Stack , Grid, Box, Typography} from '@mui/material'
import Rightbar from '../components/Rightbar'
import Leftbar from '../components/Leftbar'

import { Outlet } from 'react-router';

const Profile = () => {


  
  return (
   
      <Grid minWidth='md' container direction="row"  justifyContent='center' spacing={0} wrap='nowrap'>
      <Grid item  sx={{width: { xs:'270px',sm:'270px',md:'270px',lg:'270px',xl:'270px' },marginLeft:'105px'}}>
        <Leftbar />
      </Grid>

      {/* <Grid item xs={8} lg={8} md={7} sm={9}>  */}
      <Grid item sx={{width: { xs:'610px',sm:'610px',md:'610px',lg:'610px',xl:'610px',}}} > 
        <Stack >
        <Box 
            sx={{ 
                display: 'flex',            
                alignItems: 'center',        
                justifyContent: 'center',   
                height: '100%',              
                width: '100%',                
                flexDirection:'column'
            }}
            >
            <ConstructionIcon sx={{ fontSize: 200 }} /> 
            <Typography 
            sx={{fontSize: '48px',
                fontFamily: 'bold',
                lineHeight: '1.5'}}>MAINTENANCE</Typography>
        </Box>          
        </Stack>
        <Outlet/>
      </Grid>

      <Grid item sx={{width: { xs:'340px',sm:'340px',md:'340px',lg:'340px',xl:'350px' },marginLeft:'35px'}}> 
        <Rightbar/>
      </Grid>
       
         
       
      </Grid>
  )
}

export default Profile

//.