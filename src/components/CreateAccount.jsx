import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modal } from "../styles/theme";
import { TextField, IconButton } from "@mui/material";
import { useState } from "react";
//icons.
import { textForm } from "../styles/theme";
import logo from "../assets/logo_x.png";
import CloseIcon from "@mui/icons-material/Close";
import useAuthCall from "../hooks/useAuthCall";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function CreateAccount() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register } = useAuthCall();
  // Add photo
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState(""); // State for file name

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : ""); // Update file name state
    
  };

  // FORM
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object
    const formDataToSend = new FormData();
    
    // Append form fields
    Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
    });

    // Append the file if one is selected
    if (selectedFile) {
        formDataToSend.append('image', selectedFile);
    }
    
    // Use your register function to send formDataToSend
    register(formDataToSend);

    console.log('Form:', formDataToSend);
};

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: "20px",
          width: "300px",
          marginTop: "5px",
          textTransform: "none",
          display: "block",
        }}
      >
        Create Account
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        // onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modal}>
          <Box>
            <IconButton
              onClick={handleClose}
              sx={{ position: "relative", right: "30px", bottom: "30px" }}
            >
              <CloseIcon />
            </IconButton>

            <img
              src={logo}
              alt="xLogo"
              style={{
                width: "40px",
                margin: "auto",
                display: "block", // Display'ı block olarak ayarlayarak resmin yan yana diğer içeriklerle hizalanmasını sağlarız
                "@media (max-width: 1500px)": {
                  display: "none", // 1500px'den küçük ekranlarda resmi gizler
                },
              }}
            />
          </Box>
          <Box sx={{ width: "88%", margin: "auto" }}>
            <Typography
              variant="h5"
              sx={{ marginTop: "15px", marginBottom: "15px" }}
            >
              Create your account
            </Typography>

            {/* Form Fields */}
            <TextField
              label="Name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              variant="outlined"
              sx={textForm}
              inputProps={{ maxLength: 50 }}
              InputProps={{
                style: { backgroundColor: "transparent" },
              }}
              InputLabelProps={{ required: false }}
              required
            />
            <TextField
              label="Last Name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              variant="outlined"
              sx={textForm}
              inputProps={{ maxLength: 50 }}
              InputProps={{
                style: { backgroundColor: "transparent" },
              }}
              InputLabelProps={{ required: false }}
              required
            />
            <TextField
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              sx={textForm}
              inputProps={{ maxLength: 50 }}
              InputProps={{
                style: { backgroundColor: "transparent" },
              }}
              InputLabelProps={{ required: false }}
              required
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={textForm}
              InputProps={{
                style: { backgroundColor: "transparent" },
              }}
              InputLabelProps={{ required: false }}
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              sx={textForm}
              multiline={null}
            />
            <Box>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                onChange={handleFileChange}
              />
              <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'2px solid #ccc', borderRadius:'5px',height:'50px',marginBottom:'10px'}}>
              <label htmlFor="raised-button-file">
                <Button
                  component="span"
                  startIcon={<PhotoCamera />}
                >
                  Profile Photo
                </Button>
              </label>
              {fileName && (
                <Typography variant="body2" >
                  Selected file: {fileName}
                </Typography>
              )}
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
              onClick={handleSubmit}
            >
              CREATE
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
