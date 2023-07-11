import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { updateUser } from "../../../services/Users/userService";

const EditarPerfil = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === '' || lastName.trim() === '' || email.trim() === '') {
      setError('Por favor, completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Llama a la función de servicio para actualizar el perfil
      await updateUser({ name, lastName, email, password });

      // Mostrar una notificación o redirigir a una página de éxito
      // Aquí puedes agregar la lógica necesaria según tus requerimientos
      console.log('Perfil actualizado con éxito');
    } catch (error) {
      console.log(error);
      setError('Error al actualizar el perfil');
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Editar Perfil
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Apellido"
          value={lastName}
          onChange={handleLastNameChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Correo Electrónico"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Contraseña"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Confirmar Contraseña"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          fullWidth
          margin="normal"
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Box mt={2}>
          <Button variant="contained" type="submit">
            Guardar Cambios
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default EditarPerfil;
