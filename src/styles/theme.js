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
  position: 'relative',
  
}
export const fixedBar2 = {
  position: 'absolute',
  right:-30,
  width:'100px',
}
export const iconAndText1 = {
  color: '#71767A',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2',
      '& .MuiIconButton-root': { 
      backgroundColor: 'transparent', 
      '& .MuiSvgIcon-root': {
        color: '#EBF5FE' // İkonun rengini değiştir
      }   
}
}
}
// export const iconAndText2 = {
//   color: '#71767A',
//   '&:hover': {
//     backgroundColor: "transparent",
//     color:'#00BA7C',
//     '& > :first-child': { 
//       backgroundColor: '#EAF8F1',  
// }   
// }
// }
export const iconAndText2 = {
  color: '#71767A',
  '&:hover': {
    backgroundColor: "transparent",
    color: '#00BA7C',
    '& .MuiIconButton-root': { 
      backgroundColor: 'transparent', 
      '& .MuiSvgIcon-root': {
        color: '#00BA7C' // İkonun rengini değiştir
      } 
    }
  }
};
export const iconAndText3 = {
  color: '#71767A',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#F9197F',
      '& .MuiIconButton-root': { 
      backgroundColor: 'transparent', 
      '& .MuiSvgIcon-root': {
        color: '#FFEAF2' // İkonun rengini değiştir
      }    
}   
}
}
export const iconAndText4 = {
  color: '#71767A',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2', 
      '& .MuiIconButton-root': { 
        backgroundColor: 'transparent', 
        '& .MuiSvgIcon-root': {
          color: '#EBF5FE' // İkonun rengini değiştir
        }    
}   
}
}
export const iconAndText5 = {
  color: '#71767A',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2',
      '& .MuiIconButton-root': { 
        backgroundColor: 'transparent', 
        '& .MuiSvgIcon-root': {
          color: '#EBF5FE' // İkonun rengini değiştir
        }  
}   
}
}
export const iconAndText6 = {
  color: '#71767A',
  '&:hover': {
    backgroundColor: "transparent",
    color:'#1DA1F2',
       '& .MuiIconButton-root': { 
        backgroundColor: 'transparent', 
        '& .MuiSvgIcon-root': {
          color: '#EBF5FE' // İkonun rengini değiştir
        }   
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
  // textTransform: "none"   //cizgi silindi kontrolet
};

export const menuButtonSelected ={
  color:'#188CD8',
  textDecoration: 'underline',
  textDecorationColor: '#188CD8', // Altı çizgi rengi
  textDecorationThickness: '4px', // Altı çizgi kalınlığı
   // Altı çizginin metinden ne kadar uzakta olacağı
  //  textTransform: "none",  
  '&:hover': {
    color:'#188CD8',
    textDecoration: 'underline',
    textDecorationColor: '#188CD8', // Altı çizgi rengi
    textDecorationThickness: '4px', // Altı çizgi kalınlığı
      // Hover durumunda altı çizgiyi tekrar uygula
      // textTransform: "none"
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


