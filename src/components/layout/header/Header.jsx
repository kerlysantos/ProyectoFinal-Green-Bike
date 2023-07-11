import React, { useContext, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { GlobalContext } from "../../../context/GlobalContext";
import { Outlet } from "react-router-dom";
import avatar from "../header/avatar.png";

const pages = ["Nuevo Usuario", "Iniciar Sesion"];

const Header = () => {
  const { user, isLoggedIn, logout } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 960px)");

  const handleLoginClick = () => {
    navigate("/LoginForm");
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/");
  };

  const handleRegisterClick = () => {
    navigate("/RegistrationForm");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="x2">
          <Toolbar disableGutters>
            <Link to={`/`}>
              <img
                className="icon-header"
                src="https://res.cloudinary.com/dah7pc8j0/image/upload/v1683770178/Logo_GreenBikes_w5ubc4.png"
                alt="logo-marca"
                style={{
                  maxWidth: "150px",
                  maxHeight: "50px",
                }}
              ></img>
            </Link>

            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Movilidad Urbana Sustentable
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                style={{ marginTop: "49px" }}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {isLoggedIn
                  ? [
                      <MenuItem key="perfil" onClick={handleMenuClose}>
                        <Link
                          to="/MiPerfil"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Mi Perfil
                        </Link>
                      </MenuItem>,

                      <MenuItem key="reservas" onClick={handleMenuClose}>
                        <Link
                          to="/MisReservas"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Mis Reservas
                        </Link>
                      </MenuItem>,

                      <MenuItem key="cerrar-sesion" onClick={handleLogout}>
                        <Typography>Cerrar Sesión</Typography>
                      </MenuItem>,
                    ]
                  : isMobile &&
                    pages.map((page) => (
                      <MenuItem key={page} onClick={handleMenuClose}>
                        <Link
                          to={
                            page === "Nuevo Usuario"
                              ? "/RegistrationForm"
                              : "/LoginForm"
                          }
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <Typography>{page}</Typography>
                        </Link>
                      </MenuItem>
                    ))}
              </Menu>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  gap: "8px",
                }}
              >
                {isLoggedIn ? (
                  <>
                    <div>
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: ".1rem",
                          color: "inherit",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Bienvenid@, {user && user.name}
                      </Typography>
                    </div>
                    <div className="profile-options">
                      <Avatar
                        src={avatar}
                        alt="avatar"
                        onClick={handleMenuOpen}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      startIcon={<PersonIcon />}
                      onClick={handleLoginClick}
                    >
                      Iniciar Sesión
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<PedalBikeIcon />}
                      onClick={handleRegisterClick}
                    >
                      Nuevo Usuario
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};

export default Header;
