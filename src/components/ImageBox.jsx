import React, { useState } from 'react';
import { Grid, Box, Modal } from '@mui/material';

const ImageBox = ({ images }) => {
  const [open, setOpen] = useState(false); // Modal açık mı?
  const [selectedImage, setSelectedImage] = useState(null); // Seçilen resim

  const handleOpen = (e,image) => {
    e.stopPropagation();
    setSelectedImage(image); // Seçilen resmi belirle
    setOpen(true); // Modalı aç
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false); // Modalı kapat
    setSelectedImage(null); // Seçilen resmi temizle
  };

  const renderImages = () => {
    const imageCount = images?.length;

    return images?.map((image, index) => (
      <Grid 
        item 
        xs={imageCount === 1 ? 12 : imageCount <= 4 ? 6 : 4} 
        key={index}
      >
        <Box
          component="img"
          src={image}
          alt={`Uploaded image ${index + 1}`}
          onClick={(e) => handleOpen(e,image)} // Tıklama olayı
          sx={{
            width: '100%',
            height: imageCount === 1 ? 'auto' : '200px',
            objectFit: imageCount === 1 ? 'contain' : 'cover',
            borderRadius: 5,
            border: '1px solid gray',
            cursor: 'pointer', // Tıklanabilir olduğunu belirtmek için
          }}
        />
      </Grid>
    ));
  };

  return (
    <>
      {/* Resimlerin Grid Yapısı */}
      <Grid container spacing={1}>
        {renderImages()}
      </Grid>

      {/* Modal Bileşeni */}
      <Modal open={open} onClose={(e) => handleClose(e)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-75%, -50%)',
          }}
        >
          <Box
            component="img"
            src={selectedImage}
            alt="Selected Image"
            sx={{
              width: '150%',
              border: 1,
              borderColor: 'gray',
              borderRadius: 5,
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ImageBox;
