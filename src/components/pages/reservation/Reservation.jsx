import {
  Box,
  Button,
  Modal,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import * as React from "react";

import { useState } from "react";
import { createReservation } from "../../../services/Reservation/reservationService";
import { BicycleCardSimple } from "../../common/BicycleCards/BicycleCardSimple";
import { Link } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const steps = [
  {
    label: "PASO 1",
    description: `¿Estás seguro de esta es la bici que deseas? Lee cuidadosamente dónde está ubicada la bicicleta que elegiste, su precio por día y la categoría. Recuerda que el precio es el mismo por día o fracción.`,
  },
  {
    label: "PASO 2",
    description:
      "¿Qué día deseas reservarla? Las bicicletas son para uso diario y solo puedes reservarla por máximo un día. No puedes llevarla a tu casa o tendrás una multa del doble del precio de tu bicicleta por día de retraso en la entrega.",
  },
  {
    label: "PASO 3",
    description: `Ya estás listo para confirmar tu reserva. El pago solo puedes realizarlo en la sede que elegiste. Esperamos que disfrutes de tu aventura.`,
  },
];

export const Reservation = ({ bicycle }) => {
  const notify = () => toast("Reserva Exitosa.");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = React.useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      userEmail: "caro@caro.com",
      serialNumber: bicycle.serialNumber,
      date: date,
    };

    try {
      await createReservation(data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
      toast.error("Error al reservar bicicleta");
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/LoginForm");
  };

  return (
    <div>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        mt={1}
        mb={4}
        color={"primary"}
      >
        Tu reserva en 3 simples pasos
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
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>PASO 1</StepLabel>
            <StepContent>
              <Typography mb={3} width={"400px"}>
                Confirma los datos de la bicicleta que deseas reservar.
              </Typography>
              <BicycleCardSimple bicycle={bicycle} />
              <Typography mt={3} maxWidth={600}>
                Haz clic en continuar para confirmar y seguir al próximo paso o
                cambia de bicicleta si así lo deseas. Presta especial atención a
                la sede que elegiste para recogerla.
              </Typography>
              <Box
                mt={3}
                mb={5}
                direction="row"
                useFlexGap
                alignContent={"center"}
                sx={{ mb: 2 }}
              >
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continuar
                  </Button>
                  <Link to={"/"}>
                    <Button variant="outlined" sx={{ mt: 1, mr: 1 }}>
                      Volver a bicicletas
                    </Button>
                  </Link>
                </div>
              </Box>
            </StepContent>
          </Step>

          <Step>
            <StepLabel>PASO 2</StepLabel>
            <StepContent>
              <Typography mb={3} maxWidth={600}>
                ¿Qué día deseas reservarla? Las bicicletas son para uso diario y
                solo puedes reservarla por máximo un día. No puedes llevarla a
                tu casa o tendrás una multa del doble del precio de tu bicicleta
                por cada día de retraso desde la entrega.
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <Typography mt={3} maxWidth={500}>
                Haz clic en continuar para confirmar la fecha y seguir al
                próximo paso o haz clic en volver para ir la paso anterior.
              </Typography>
              <Box
                width={"600px"}
                mt={3}
                mb={5}
                direction="row"
                useFlexGap
                alignContent={"center"}
                sx={{ mb: 2 }}
              >
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continuar
                  </Button>
                  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Volver
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>

          <Step>
            <StepLabel>PASO 3</StepLabel>
            <StepContent>
              <Typography maxWidth={600}>
                {`A continuación te dispones a reservar una bicicleta tipo ${bicycle.type} durante todo el día ${date} por un valor total de $${bicycle.pricePerHour}. Haz clic en reservar y disfruta tu viaje o haz clic en cancelar
                para volver a nuestra página principal.`}
              </Typography>
              <Box
                width={"600px"}
                mt={3}
                mb={5}
                direction="row"
                useFlexGap
                alignContent={"center"}
                sx={{ mb: 2 }}
              >
                <div>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Reservar
                  </Button>
                  <Link to={"/"}>
                    <Button sx={{ mt: 1, mr: 1 }}>Cancelar</Button>
                  </Link>
                </div>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
      </Box>

      <Modal
        open={showModal}
        onClose={handleModalClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "#ffffff",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Reservación exitosa
          </Typography>
          <Typography align="center" gutterBottom>
            ¡Gracias por tu reserva!
          </Typography>
          <Link to={"/"}>
            <Button
              variant="contained"
              onClick={handleModalClose}
              sx={{ marginTop: "16px" }}
            >
              Volver a bicicletas
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};
