import {
  Box,
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

export const BicycleCardAdmin = ({ bicycle }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardHeader
        align="left"
        title={`Bici ${bicycle.type}`}
        subheader={`Número de serie: ${bicycle.serialNumber}`}
      />
      <CardMedia
        component="img"
        height="140"
        image="https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png"
        alt="green iguana"
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
            <LocationOnIcon /> {bicycle.location}
          </Typography>
          <Typography gutterBottom variant="body1" component="div" align="left">
            <LocalOfferIcon /> ${bicycle.pricePerHour}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Box
          sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}
        >
          <Typography
            variant="h6"
            underline="hover"
            color="primary"
            component={Link}
            ml={2}
          >
            Editar
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <Typography
            variant="h6"
            underline="hover"
            color="primary"
            component={Link}
            to={`/bicycleAdmin/${bicycle.serialNumber}`}
            mr={2}
          >
            Ver detalle
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};
