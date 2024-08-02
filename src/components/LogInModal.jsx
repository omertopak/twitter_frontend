import * as React from 'react';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modal } from '../styles/theme';
import { TextField, IconButton } from '@mui/material';
import { useState } from 'react';
//icons.
import { textForm } from '../styles/theme';
import logo from '../assets/logo_x.png'
import CloseIcon from '@mui/icons-material/Close';
import useAuthCall from "../hooks/useAuthCall";





export default function CreateAccount() {
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen2(true);
  const handleClose = () => setOpen2(false);

  const modalRef = useRef(null);
  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Eğer tıklanan element modalın içinde değilse modalı kapatma
    }
  };

  const { login } = useAuthCall()

  //FORM
  const [formData, setFormData] = useState({
    email: '',
    password: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    login(formData)
    console.log(formData)
};
  

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{borderRadius:'20px',width:'300px',marginTop:'5px',textTransform: 'none',display:'block',backgroundColor:'transparent',color:'#188CD8'}} >Sign In</Button>

      <Modal
        open={open2}
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
              marginBottom:'25px',
              display: 'block', // Display'ı block olarak ayarlayarak resmin yan yana diğer içeriklerle hizalanmasını sağlarız
              '@media (maxWidth: 1500px)': {
                display: 'none', // 1500px'den küçük ekranlarda resmi gizler
              },
            }}
        />
          </Box> 
          <Box sx={{width:'88%',margin:'auto'}}>

          <TextField
            label="email"
            type="text"
            name='email'
            value={formData.email} 
            onChange={handleChange}
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
            label="Password"
            type="password"
            name='password'
            value={formData.password} 
            onChange={handleChange}
            variant="outlined"
            sx={textForm}
            multiline={null}
            
          />

          <Button  
            variant='contained' sx={{borderRadius:'20px',width:'100%',padding:'10px',marginTop:'5px'}} 
            onClick={handleSubmit}>
                  SIGN IN
          </Button>

          </Box>
        </Box>
      </Modal>
    </div>
  );
}
