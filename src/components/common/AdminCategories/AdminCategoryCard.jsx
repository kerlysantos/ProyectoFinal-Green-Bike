import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React from "react";
import { Link } from "react-router-dom";

export const AdminCategoryCard = () => {
  return (
    <Card sx={{ width: 250 }}>
      <CardHeader align="left" title={"Category Name"} />
      <CardMedia
        component="img"
        height="140"
        image="https://www.twowheelingtots.com/wp-content/uploads/2020/08/FollowMe-Tandem-Action.jpg"
        alt="Bici"
      />

      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems={"left"}
          mt={2}
        >
          <Typography gutterBottom variant="body1" component="div" align="left">
            Este tipo de bicicletas son utilizadas para montaña. El alquiler
            incluye casco.
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button>Eliminar</Button>
      </CardActions>
    </Card>
  );
};
