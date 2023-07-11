import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { updateUser } from "../../../services/Users/userService";

export const UserCard = ({ user }) => {
  console.log(user);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRole = () => {
    let new_id = user.roleData.id == 2 ? 3 : 2;
    updateUser(new_id, user.email);
    user.roleData.id = new_id;
    setOpen(false);
  };

  if (user.roleData.id == null) {
    return <></>;
  }

  return (
    <div>
      <Card sx={{ width: 300 }}>
        <CardHeader
          sx={{
            textAlign: "left",
          }}
          avatar={
            <Avatar sx={{ bgcolor: "#a2cf6e" }} aria-label="recipe">
              {user.name.charAt(0)}
            </Avatar>
          }
          title={user.name}
          subheader={user.email}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="#ffffff"
            bgcolor="#4dabf5"
            m={0}
            p={1}
          >
            Role: {user.roleData.id == 2 ? "Usuario" : "Administrador"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Cambiar rol
          </Button>
        </CardActions>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {user.roleData.id == 2
              ? "Esta persona tiene el rol de Usuario."
              : "Esta persona tiene el rol de Administrador."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {user.roleData.id == 2
                ? `¿Estás seguro de que deseas cambiarlo a Administrador?`
                : `¿Estás seguro de que deseas cambiarlo a Usuario?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleRole} autoFocus>
              Cambiar rol
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </div>
  );
};
