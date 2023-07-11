import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageCarousel from "../../common/Modals/ImageCarousel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { Margin } from "@mui/icons-material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0.5,
};

export const BicycleDetailAdmin = ({ bicycle }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(bicycle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box marginBottom={"20px"}>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        mt={2}
        color={"primary"}
      >
        Detalle de la bicicleta
      </Typography>

      <Typography
        gutterBottom
        variant="body1"
        component="div"
        align="center"
        m={2}
      >
        A continuación verás los detalles de la bicicleta que elegiste.
      </Typography>

      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column" },
            maxWidth: "600px",
          }}
        >
          <CardHeader
            align="center"
            title={`Bici ${bicycle.type}`}
            subheader={`Número de serie: ${bicycle.serialNumber}`}
          />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin={1}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png"
              alt=""
              width={400}
              style={{ margin: "auto", marginBottom: "20px" }}
            />
            <Box
              width="400px"
              display="flex"
              justifyContent="space-around"
              margin={1}
            >
              <Button onClick={handleOpen} variant="outlined" size="small">
                Ver más fotografías
              </Button>
              <Link to={`/reservation/${bicycle.serialNumber}`}>
                <Button variant="contained">Reservar</Button>
              </Link>
            </Box>
          </Box>
          <Box margin={1}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <ImageCarousel />
              </Box>
            </Modal>
          </Box>

          <Box margin={1} marginLeft={2} marginRight={2} marginBottom={4}>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  color={"black"}
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  Precio
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {`El precio por día es de $${bicycle.pricePerHour} pesos argentinos`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={"black"}>
                  Una vez retires la bicicleta de una de nuestras sedes
                  comenzará a correr el reloj. No importa el tiempo que la uses,
                  el precio es pro día o fracción. Recuerda que puedes
                  devolverla en cualquiera de nuestras sedes de Buenos Aires.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  color={"black"}
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  Ubicación:
                </Typography>
                <Typography color={"black"} sx={{ color: "text.secondary" }}>
                  {`Esta bicicleta está ubicada en nuestra sede ${bicycle.location}`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography color={"black"} style={{ margin: "0" }}>
                  Recuerda que solo puedes recogerla en la misma sede que la
                  reservaste. Si no tienes reserva, puedes acercarte y verificar
                  si hay bicicletas dipsonibles en nuestras sedes.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  color={"black"}
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  Otras caracteristicas
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Expande para ver el resto de las caracteristicas
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary" }}>
                  {`Talla de la bicicleta: ${bicycle.size}`}
                  <br />
                  {`Necesita reparación: ${bicycle.needReparation}`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png",
    title: "Burger",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png",
    title: "Burger",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png",
    title: "Burger",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png",
    title: "Burger",
  },
];
