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
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";

export const BicycleCardUser = ({ bicycle }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardHeader align="left" title={`${bicycle.type}`} />
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
        <Typography
          variant="h6"
          underline="hover"
          color="primary"
          component={Link}
          to={`/bicycleAdmin/${bicycle.serialNumber}`}
        >
          Ver detalle
        </Typography>
      </CardActions>
    </Card>
  );
};
