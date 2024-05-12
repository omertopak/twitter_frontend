import React from "react";
import { Avatar, Box, Button, Typography, IconButton } from "@mui/material";
import { bracketter, CircleButton } from "../styles/theme";
import { iconAndText1 } from "../styles/theme";
import { iconAndText2 } from "../styles/theme";
import { iconAndText3 } from "../styles/theme";
import { iconAndText4 } from "../styles/theme";
import { iconAndText5 } from "../styles/theme";
import { iconAndText6 } from "../styles/theme";

//icons
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Replies = () => {
    return (
      <Box sx={[{display:'flex'},bracketter]}>
        <Box sx={[{ display: "flex" },]}>
          <Box>
             <Avatar
            alt="X"
            src={{}}
            sx={{ width: "2rem", height: "2rem", margin: "1rem" }}
          /> 
           </Box>
           
          </Box>
      
        <Box > 
        <Box sx={{display:'flex'}}>
             <Typography variant="subtitle1" component="h6">
              Ozgur demirtas
            </Typography>
            <Typography variant="subtitle1" component="h6" color="gray">
              @Profdemirtas
            </Typography>
        </Box>
           
          <Typography>
            TWIt Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quidem deserunt quaerat veniam voluptatem vitae error inventore,
            commodi sapiente reprehenderit voluptatum perferendis molestiae
            ducimus tempore temporibus animi! Ad esse reiciendis minima hic
            molestias? Dolorem voluptatum quam nemo reiciendis quae quasi velit?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton sx={[iconAndText1]}>
              <ChatBubbleOutlineIcon fontSize="small"></ChatBubbleOutlineIcon>
              <Typography>20</Typography>
            </IconButton>
            <IconButton sx={[iconAndText2]}>
              <SwapCallsIcon fontSize="small"></SwapCallsIcon>
              <Typography>12</Typography>
            </IconButton>
            <IconButton sx={[iconAndText3]}>
              <FavoriteBorderIcon fontSize="small"></FavoriteBorderIcon>
              <Typography>243</Typography>
            </IconButton>
            <IconButton sx={[iconAndText5]}>
              <TurnedInNotIcon fontSize="small"></TurnedInNotIcon>
              <Typography>243</Typography>
            </IconButton>
            <IconButton sx={[iconAndText6]}>
              <IosShareIcon fontSize="small"></IosShareIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
};

export default Replies;
