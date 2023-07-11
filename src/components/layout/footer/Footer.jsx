import React from "react";
import { Outlet } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ marginTop: "auto" }}>
      <Outlet />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              sx={{
                flex: 1,
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".0rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ©2023 Green Bikes!
            </Typography>

            <Stack direction="row" alignItems="right" spacing={2}>
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Footer;
