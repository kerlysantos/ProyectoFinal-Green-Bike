import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

export const AdminDashboard = () => {
  return (
    <div>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        m={3}
        color={"primary"}
      >
        Panel de administración
      </Typography>
      <Box
        display={"flex"}
        alignItems={"space-between"}
        mt={2}
        mb={5}
        spacing={{ xs: 1, sm: 1 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        style={{ justifyContent: "center", width: "100%" }}
      >
        <Card
          sx={{
            maxHeight: 400,
            width: 280,
            m: 1,
            p: 1,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://www.albaibs.es/wp-content/uploads/2020/11/dibujo-punto-venta-fidelizacion.png"
              alt="Admin"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gestión de bicicletas
              </Typography>
              <Typography variant="body2" color="text.primary">
                Ingresa aquí para ver la lista de tus bicicletas, crear nuevas o
                ver los detalles para administrarlas mejor.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/bicycleList">
              <Button size="small" color="primary">
                Continuar
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxHeight: 400, width: 280, m: 1, p: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://us.123rf.com/450wm/alexdndz/alexdndz2003/alexdndz200300015/alexdndz200300015.jpg?ver=6"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gestión de usuarios
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ingresa para ver todos los usuarios de la aplicación y cambiar
                sus derechos de acceso.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/userList">
              <Button size="small" color="primary">
                Continuar
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxHeight: 400, width: 280, m: 1, p: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://us.123rf.com/450wm/vectorshowstudio/vectorshowstudio1702/vectorshowstudio170200364/71309346-equipo-de-la-bicicleta-icono-de-la-ilustraci%C3%B3n-del-vector-piloto-plana.jpg?ver=6"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gestión de categorías
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Si deseas ver las categrorías de bicicletas existentes o agregar
                una nueva ingresa aquí.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/categoryList">
              <Button size="small" color="primary">
                Continuar
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};
