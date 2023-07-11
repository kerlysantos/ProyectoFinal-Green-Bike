import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Box, Modal } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import avatar from "./avatar.png";
import { GlobalContext } from '../../../context/GlobalContext';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditarPerfil from './EditarPerfil';

const MiPerfil = () => {
  const { user } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const goBack = () => {
    navigate(-1);
  };

  const openEditProfile = () => {
    setShowModal(true);
  };

  const closeEditProfile = () => {
    setShowModal(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1vh', height: 'auto' }}>
      <Card sx={{ maxWidth: '450px' }}>
        <CardActionArea>
          <div style={{ position: 'relative', paddingTop: '350px' }}>
            <CardMedia
              component="img"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              src={avatar}
              alt="avatar"
            />
          </div>
          <CardContent>
            <Box mt={1} mb={1}>
              <Typography variant="h4" gutterBottom>
                Datos Personales
              </Typography>
            </Box>
            <Typography variant="h6" gutterBottom style={{ fontSize: '1.0rem', marginBottom: '0.1rem' }}>
              Nombre: {user && user.name}
            </Typography>
            <Typography variant="h6" gutterBottom style={{ fontSize: '1.0rem', marginBottom: '0.1rem' }}>
              Apellido: {user && user.lastName}
            </Typography>
            <Typography variant="h6" gutterBottom style={{ fontSize: '1.0rem', marginBottom: '0.1rem' }}>
              Email: {user && user.email}
            </Typography>
            
            <Box mt={2} mb={2} display="flex" justifyContent="center">
              <Box mx={1} display="inline-block">
                <Button variant="contained" startIcon={<AddCircleIcon />} onClick={openEditProfile}>
                  Editar Perfil
                </Button>
              </Box>
              <Box mx={1} display="inline-block">
                <Button variant="contained" startIcon={<AddCircleIcon />}>
                  Ver mis reservas
                </Button>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        <Box ml={2} mb={2}>
          <Button variant="text" startIcon={<ArrowBackIcon />} onClick={goBack}>
            Volver
          </Button>
        </Box>
      </Card>

      <Modal
  open={showModal}
  onClose={closeEditProfile}
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      width: 400,
      backgroundColor: "#ffffff", // Cambiar el color de fondo a blanco
      p: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <EditarPerfil closeModal={closeEditProfile} />
  </Box>
</Modal>

    </div>
  );
}

export default MiPerfil;
