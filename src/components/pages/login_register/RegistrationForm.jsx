import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from "../../../services/Users/userService";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    roleId: 2,
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e, property) => {
    setUser({ ...user, [property]: e.target.value });
    setErrors({ ...errors, [property]: "" });
  };

  useEffect(() => {}, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasErrors = false;
    const updatedErrors = {};

    // Validar nombre
    if (user.name.trim() === "" || user.name.length < 3) {
      updatedErrors.name = "Ingrese un nombre válido (mínimo 3 caracteres)";
      hasErrors = true;
    }

    // Validar apellido
    if (user.lastName.trim() === "" || user.lastName.length < 3) {
      updatedErrors.lastName =
        "Ingrese un apellido válido (mínimo 3 caracteres)";
      hasErrors = true;
    }

    // Validar email
    if (
      user.email.trim() === "" ||
      !isValidEmail(user.email) ||
      !isValidEmailFormat(user.email)
    ) {
      updatedErrors.email = "Ingrese un email válido";
      hasErrors = true;
    }

    // Validar contraseña
    if (user.password.trim() === "" || user.password.length < 6) {
      updatedErrors.password =
        "Ingrese una contraseña válida (mínimo 6 caracteres)";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(updatedErrors);
      return;
    }

    try {
      await createUser(user);
      setShowModal(true);
    } catch (error) {
      console.log(error);
      toast.error("Error al registrar el usuario");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidEmailFormat = (email) => {
    const dotRegex = /\.+$/;

    if (dotRegex.test(email)) {
      // Si hay puntos al final de la dirección de correo
      const lastDotIndex = email.lastIndexOf(".");
      const lastPart = email.slice(lastDotIndex + 1);

      if (lastPart === "com" && lastDotIndex !== email.length - 4) {
        return false;
      }
    }

    return true;
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/LoginForm");
  };

  return (
    <div>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        align="center"
        mt={4}
        color="primary"
      >
        Bienvenid@ a Green Bikes
      </Typography>

      <Box
        m="auto"
        mb={"110px"}
        alignItems="center"
        component="form"
        sx={{
          "& .MuiTextField-root": {},
          width: "40%",
          border: 1,
          padding: 2,
          borderColor: "#f0f0f5",
          align: "center",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography
          color="primary"
          gutterBottom
          variant="h5"
          component="div"
          align="left"
          m={1}
          ml={2}
        >
          Inicia tu registro
        </Typography>
        <Grid item xs={12} sm={6} m={2}>
          <TextField
            margin="none"
            fullWidth
            error={!!errors.name}
            label="Nombre"
            value={user.name}
            onChange={(e) => handleChange(e, "name")}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6} m={2}>
          <TextField
            margin="none"
            fullWidth
            error={!!errors.lastName}
            label="Apellido"
            value={user.lastName}
            onChange={(e) => handleChange(e, "lastName")}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6} m={2}>
          <TextField
            margin="none"
            fullWidth
            error={!!errors.email}
            label="Email"
            value={user.email}
            onChange={(e) => handleChange(e, "email")}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6} m={2}>
          <TextField
            margin="none"
            fullWidth
            error={!!errors.password}
            label="Contraseña"
            value={user.password}
            onChange={(e) => handleChange(e, "password")}
            type={showPassword ? "text" : "password"}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Stack m={"20px"} spacing={2} direction="row">
          <Button
            type="submit"
            variant="contained"
            startIcon={<HowToRegIcon />}
          >
            Registrarme
          </Button>
        </Stack>
      </Box>

      <Modal
        open={showModal}
        onClose={handleModalClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "#ffffff",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Registro exitoso
          </Typography>
          <Typography align="center" gutterBottom>
            ¡Gracias por registrarte! Ahora puedes iniciar sesión.
          </Typography>
          <Button
            variant="contained"
            onClick={handleModalClose}
            sx={{ marginTop: "16px" }}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

