import React from 'react'
import { search } from '../styles/theme';

// import { Box } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Box } from '@mui/material';
const Rightbar = () => {
  return (
    <Box>
     
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
    <TextField
      id="search-bar"
      className="text"
      // onInput={(e) => {
      //   setSearchQuery(e.target.value);
      // }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
      
    </Box>
  )
}

export default Rightbar