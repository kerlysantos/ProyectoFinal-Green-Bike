import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../../context/GlobalContext';
import bici from "./bici.png";

const MisReservas = () => {
  const { user } = useContext(GlobalContext);

  const reservaData = {
    deleted: false,
    id: 21,
    idImage: { id: 23, title: null, url: null, deleted: false },
    location: "Palermo",
    needReparation: "no",
    pricePerHour: 12,
    serialNumber: "dia8sds",
    size: "L",
    state: true,
    type: "Electrica",
  };

  return (
    <div id="misReservasContainer">
      <Card sx={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Estas son tus reservas, {user.name}
            </Typography>
            <div>
              <Typography variant="h6" gutterBottom>
                Detalles del usuario:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Nombre: {user.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Apellido: {user.lastName}
              </Typography>
              {/* Otros detalles del usuario */}
            </div>
            <div>
              <Typography variant="h6" gutterBottom>
                Detalles adicionales:
              </Typography>
              <Typography variant="body1" gutterBottom>
                ID: {reservaData.id}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ubicación: {reservaData.location}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Necesita reparación: {reservaData.needReparation}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Precio por hora: {reservaData.pricePerHour}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Número de serie: {reservaData.serialNumber}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tamaño: {reservaData.size}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Estado: {reservaData.state ? 'Activa' : 'Inactiva'}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tipo: {reservaData.type}
              </Typography>
              <Typography variant="body1" gutterBottom>
                ID de imagen: {reservaData.idImage.id}
              </Typography>
              {/* Otros detalles adicionales */}
            </div>
          </CardContent>
        </div>
        <div style={{ flex: '1' }}>
          <CardContent>
            <img src={bici} alt="Imagen de reserva" style={{ width: '80%', }} />
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default MisReservas;
