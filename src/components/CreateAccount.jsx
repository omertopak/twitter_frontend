import * as React from 'react';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modal } from '../styles/theme';
import { TextField, IconButton, Avatar } from '@mui/material';
//icons.
import { textForm } from '../styles/theme';
import logo from '../assets/logo_x.png'

export default function CreateAccount() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalRef = useRef(null);
  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Eğer tıklanan element modalın içinde değilse ve tıklanan elementin id'si 'close' değilse, modalı kapatma
      if (event.target.id !== 'close') {
        handleClose();
      }
    }
  };
  
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
        <Button id='close' variant="contained" color="primary" sx={{display:'inline-block'}} >
          x
        </Button>
          <img
            src={logo}
            alt="xLogo"
            // width="auto"
            style={{
              display: "inline-block",
              width: '40px',
              margin:'auto'
            }}
          />
          <Typography variant='h5' sx={{marginTop:'15px',marginBottom:'15px'}}>Create your account</Typography>
          <TextField
            label="Name"
            type="search"
            variant="filled"
            required='true'
            sx={textForm}
          />



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