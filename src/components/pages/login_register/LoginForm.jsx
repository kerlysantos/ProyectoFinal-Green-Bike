import React, { useContext, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import axios from "axios";
import { GlobalContext } from "../../../context/GlobalContext";
import { getUserByEmail } from "../../../services/Users/userService";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { login, setUser, user } = useContext(GlobalContext);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasErrors = false;
    const updatedErrors = {};

    // Valida correo electrónico
    if (loginForm.username.trim() === "") {
      updatedErrors.username = "Ingrese su correo electrónico";
      hasErrors = true;
    } else if (!isValidEmail(loginForm.username)) {
      updatedErrors.username = "Dirección de correo electrónico no válida";
      hasErrors = true;
    }

    // Valida contraseña
    if (loginForm.password.trim() === "") {
      updatedErrors.password = "Ingrese su contraseña";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(updatedErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://ec2-52-15-150-70.us-east-2.compute.amazonaws.com:8080/equipo12-api/users/auth",
        {
          email: loginForm.username,
          password: loginForm.password,
        }
      );

      const { token } = response.data;
      login(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const userResponse = await getUserByEmail(loginForm.username);

      setUser(userResponse);
      console.log(userResponse);

      if (userResponse.roleData && userResponse.roleData.id === 3) {
        navigate("/dashboard"); // Redirigir al administrador
      } else if (userResponse.roleData && userResponse.roleData.id === 2) {
        navigate("/"); // Redirigir al home
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === "Invalid email") {
          setErrors({
            ...errors,
            username: "Correo electrónico inválido",
          });
        } else if (error.response.data.message === "Invalid password") {
          setErrors({
            ...errors,
            password: "Contraseña incorrecta",
          });
        } else if (error.response.data.message === "User not found") {
          setErrors({
            ...errors,
            username: "Usuario no registrado",
          });
        }
      } else {
        console.error("Error de inicio de sesión:", error);
      }
    }
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
        mb={15}
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
          variant="h6"
          component="div"
          align="Left"
          m={1}
          ml={2}
        >
          Iniciar sesión
        </Typography>
        <Grid item xs={12} sm={6} m={2}>
          <TextField
            margin="normal"
            fullWidth
            label="Correo electrónico"
            name="username"
            value={loginForm.username}
            onChange={handleInputChange}
            error={!!errors.username}
            helperText={errors.username}
          />
        </Grid>
        <Grid item xs={12} sm={6} m={2}>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginForm.password}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
              error={!!errors.password}
              helperText={errors.password}
            />
          </FormControl>
        </Grid>

        <Stack m={5} spacing={1} direction="row">
          <Button type="submit" variant="contained" startIcon={<VpnKeyIcon />}>
            Ingresar
          </Button>
          <Button
            type="link"
            variant="outlined"
            startIcon={<HowToRegIcon />}
            onClick={() => navigate("/RegistrationForm")}
          >
            Registrarme
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
