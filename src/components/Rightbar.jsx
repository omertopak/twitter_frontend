import React from 'react'
import { search } from '../styles/theme';

// import { Box } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";
import { Box, Paper, } from '@mui/material';
import { InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState,useEffect } from 'react';


const Rightbar = () => {

  
  const isSmallScreen = useMediaQuery('(max-width:988px)');
  const [drawerOpen, setDrawerOpen] = useState(!isSmallScreen); // Küçük ekranlarda varsayılan olarak kapalı, büyük ekranlarda açık
  useEffect(() => {
    setDrawerOpen(!isSmallScreen); // Ekran boyutu değiştiğinde drawerOpen durumunu güncelle
  }, [isSmallScreen]);



  return (
    <Box >
      {isSmallScreen ?
       <Box ></Box>
      : 
      <Box sx={{marginTop:'5px'}}>
      <Paper sx={search.root} variant="outlined" >
      <IconButton sx={search.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <InputBase sx={search.input} placeholder='Search'/>
       </Paper>
      </Box>
      }
      
   
   

    </Box>
  )
}

export default Rightbar



{/* <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton> */}
      {/* <TextField
      id="search-bar"
      className="text"
      // onInput={(e) => {
      //   setSearchQuery(e.target.value);
      // }}
      label="Search"
      variant="standard"
      // placeholder="Search..."
      size="small"
      /> */}

    {/* <TextField
          id="Search"
          style={{ margin: 8 }}
          placeholder="Search"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          sx={{borderColor:'red',border:'12px'}}
        /> */}