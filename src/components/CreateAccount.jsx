import * as React from 'react';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modal } from '../styles/theme';
import { TextField, IconButton, Avatar, Paper, InputBase } from '@mui/material';

//icons.
import { textForm } from '../styles/theme';
import logo from '../assets/logo_x.png'
import CloseIcon from '@mui/icons-material/Close';


import useAuthCall from "../hooks/useAuthCall";



export default function CreateAccount() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalRef = useRef(null);
  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Eğer tıklanan element modalın içinde değilse modalı kapatma
    }
  };

  const { register } = useAuthCall()

  

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{ borderRadius: '20px', width: '300px', marginTop: '5px', textTransform: 'none', display: 'block' }} >Create Account</Button>

      <Modal
        open={open}
        // onClose={handleClose}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={modal}>
          <Box>
          <IconButton onClick={handleClose} sx={{position:'relative', right:'30px', bottom:'30px'}}>
             <CloseIcon />
          </IconButton>
          
          <img
            src={logo}
            alt="xLogo"
            style={{
              width: '40px',
              margin: 'auto',
              display: 'block', // Display'ı block olarak ayarlayarak resmin yan yana diğer içeriklerle hizalanmasını sağlarız
              '@media (max-width: 1500px)': {
                display: 'none', // 1500px'den küçük ekranlarda resmi gizler
              },
            }}
        />
          </Box> 
          <Box sx={{width:'88%',margin:'auto'}}>
          <Typography variant='h5' sx={{ marginTop: '15px', marginBottom: '15px' }}>Create your account</Typography>

          {/* //!========================================== */}
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            sx={textForm}
            inputProps={{ maxLength: 50 }}
            InputProps={{
              style: { backgroundColor: 'transparent'}, // TextField'in altındaki input elementinin arka plan rengini belirler
            }}
            InputLabelProps={{ required: false }} // Yıldız işaretini gizler
            required // Zorunlu alanı belirtir
          />
          <TextField
            label="Last Name"
            type="text"
            variant="outlined"
            sx={textForm}
            inputProps={{ maxLength: 50 }}
            InputProps={{
              style: { backgroundColor: 'transparent'}, // TextField'in altındaki input elementinin arka plan rengini belirler
            }}
            InputLabelProps={{ required: false }} // Yıldız işaretini gizler
            required // Zorunlu alanı belirtir
          />
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            sx={textForm}
            inputProps={{ maxLength: 50 }}
            InputProps={{
              style: { backgroundColor: 'transparent'}, // TextField'in altındaki input elementinin arka plan rengini belirler
            }}
            InputLabelProps={{ required: false }} // Yıldız işaretini gizler
            required // Zorunlu alanı belirtir
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            sx={textForm}
            InputProps={{
              style: { backgroundColor: 'transparent'}, // TextField'in altındaki input elementinin arka plan rengini belirler
            }}
            InputLabelProps={{ required: false }} // Yıldız işaretini gizler
            required // Zorunlu alanı belirtir
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            sx={textForm}
            multiline={null}
            
          />

{/* //?register fonksiyonu ile valuelari backend e yolladik ve user  i olusturduk. */}
{/* //! register(values) */}
          <Button  
            variant='contained' sx={{borderRadius:'20px',width:'100%',padding:'10px',marginTop:'5px'}} >
                  CREATE
          </Button>
        {/* //!========================================== */}

          </Box>
        </Box>
      </Modal>
    </div>
  );
}



//? textfield first styling for hoover and onclick
// sx={{
//   '& .MuiFilledInput-root': {
//     backgroundColor: 'transparent',
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//     '&:before': {
//       borderBottom: 'none',
//     },
//     '&:after': {
//       borderBottom: 'none',
//     },
//     border: '1px solid #ccc', // Sınır ekler
//     borderRadius: '5px', // İsteğe bağlı olarak kenar yuvarlaklığını ayarlar
//   },
// }}


//? Cross sign manually
{/* <Button onClick={handleClose} variant="text" color="primary" sx={{
            display: 'flex',
            position:'relative',
            right:'48px',
            bottom:'30px',
            width:'fit-content',
            margin:0,
            padding: 0, 
            '&:hover': {
              background: 'none', // Hover sırasında arka plan rengi olmayacak
            },
          }} >
            x
          </Button> */}