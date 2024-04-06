import React from 'react'
import { search } from '../styles/theme';

// import { Box } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";
import { Box, Paper, } from '@mui/material';
import { InputBase, Divider } from '@mui/material';

const Rightbar = () => {
  

  return (
    <Box>
      <Paper sx={search.root} variant="outlined" >
      <IconButton sx={search.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <InputBase sx={search.input}/>
    </Paper>
    <Paper sx={{p: '15px', }} >
    </Paper>

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