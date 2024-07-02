import { ColorLens, Height } from "@mui/icons-material"
import { colors } from "@mui/material"

export const bracketter = {
    border: 1,
    borderColor: 'gray', 
    // borderCollapse: 'collapse' 
    borderBottom:0
  }
export const bracketter2 = {
    border: 1,
    borderColor: 'gray', 
    // borderCollapse: 'collapse' 
    borderBottom:0,
    borderTop:0
  }
export const transparentButton = {
  alignItems:'center',
  '&:hover': {backgroundColor: 'transparent'}
  }

export const search = {
  root: {
    // padding: '2px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px', 
    borderColor: 'gray.500',
    
  },
  input: {
    marginLeft: 1,
    flex: 1,
    
  },
  border:{
    border:1,
    borderColor:'gray.500',
    
  }
}

export const fixedBar = {
  position: 'fixed',
  top: 0,
}

export const iconAndText1 = {
  color: 'black',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2',
    '& > :first-child': { 
      backgroundColor: '#EBF5FE',  
}
}
}
export const iconAndText2 = {
  color: 'black',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#00BA7C',
    '& > :first-child': { 
      backgroundColor: '#EAF8F1',  
}   
}
}
export const iconAndText3 = {
  color: 'black',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#F9197F',
    '& > :first-child': { 
      backgroundColor: '#FFEAF2',  
}   
}
}
export const iconAndText4 = {
  color: 'black',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2',
    '& > :first-child': { 
      backgroundColor: '#EBF5FE',  
}   
}
}
export const iconAndText5 = {
  color: 'black',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2',
    '& > :first-child': { 
      backgroundColor: '#EBF5FE',  
}   
}
}
export const iconAndText6 = {
  color: 'black',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2',
    '& > :first-child': { 
      backgroundColor: '#EBF5FE',  
}   
}
}

export const logoCenter = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export const modal = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '610px',
  bgcolor: 'background.paper',
  border: '0px',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};

export const textForm = {
  backgroundColor: 'transparent',
  borderBottom: 'none',
  border: '1px solid #ccc', 
  borderRadius: '5px', 
  '&:focus-within': {
    borderColor: '#1976D2', },
  width:'100%',
  marginBottom:'20px'
};

export const menuButton={
  color:'#188CD8',
};

export const menuButtonSelected ={
  color:'#188CD8',
  textDecoration: 'underline',
  textDecorationColor: '#188CD8', // Altı çizgi rengi
  textDecorationThickness: '4px', // Altı çizgi kalınlığı
   // Altı çizginin metinden ne kadar uzakta olacağı
  '&:hover': {
    color:'#188CD8',
    textDecoration: 'underline',
    textDecorationColor: '#188CD8', // Altı çizgi rengi
    textDecorationThickness: '4px', // Altı çizgi kalınlığı
      // Hover durumunda altı çizgiyi tekrar uygula
  },
}

// COLORS
// twittercolors
// TEXT E6E9EA
  // blue 	#188CD8
  // BACK BLUE #0D1720 darktheme
    // #EBF5FE

  // DARK BLUE#1C9BEF
// darkgray #16181C
// ?light gray #AAB8C2
// extra light gray #E1E8ED
// extra extra light gray #F5F8FA
    // pink #F9197F
    // #210C14     darktheme
    //  #FFEAF2

        // green #00BA7C
        // BACK GREEN #0C1A14   darktheme
        //  #EAF8F1

// BUTTN BACKGROUND BEYAZ #D7DBDC   
// USERNAME #71767A


