import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";

import React from "react";

export const UserCategory = () => {
  return (
    <div>
      <Box
        display={"flex"}
        alignItems={"space-between"}
        mt={2}
        spacing={{ xs: 1, sm: 1 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        style={{ justifyContent: "center", width: "100%" }}
      >
        <Card sx={{ width: 220, m: 2, p: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://hips.hearstapps.com/hmg-prod/images/bmx-bikes-gt-0077-644fdbea308a8.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bicis BMX
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BMX es la abreviación de Bicycle Motocross, una modalidad nacida
                en California en 1969. ¡Disfrútala!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 220, m: 2, p: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://as01.epimg.net/deportes_accion/imagenes/2020/10/14/mas_accion/1602672075_802960_1602672916_noticia_normal.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bicis Eléctricas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                En 1896, Humber, un fabricante británico, exhibió la primera
                bicicleta eléctrica y alcanzó una velocidad 60 km/h.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 220, m: 2, p: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.gq.com.mx/photos/5d162f6b797724689009f674/master/w_6016,h_4016,c_limit/bici1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bicis de ciudad
              </Typography>
              <Typography variant="body2" color="text.secondary">
                En 1817 se le atribuyó A Karl Freiherr von Drais la creación de
                la primera bicicleta.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 220, m: 2, p: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1403126305/es/foto/joven-jinete-ni%C3%B1o-en-el-casco-y-gafas-de-sol-montar-en-bicicleta.jpg?b=1&s=170667a&w=0&k=20&c=Bcy79L3qK0VFSYLZ2UFodjLP48cPjOqFWBu3k3OjNLI="
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bicis infantiles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                El transporte sostenible para que tus pequeños aprnedan a cuiar
                el medio ambiente.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};
