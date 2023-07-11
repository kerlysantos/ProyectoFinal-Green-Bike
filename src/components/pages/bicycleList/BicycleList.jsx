import React from "react";
import { Box } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Button, Container, Pagination, Typography } from "@mui/material";
import { BicycleCardAdmin } from "../../common/BicycleCards/BicycleCardAdmin";

export const BicycleList = ({ bicycles }) => {
  return (
    <div>
      <Box>
        <Container align="center">
          <Box marginBottom={"20px"}>
            <Typography
              gutterBottom
              variant="h4"
              align="center"
              mt={2}
              color={"primary"}
            >
              Lista de bicicletas
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="center"
              m={3}
            >
              A continuación verás la lista de bicicletas que has creado hasta
              ahora. Puedes crear una nueva o editar las existentes utilizando
              los botones correspondientes.
            </Typography>

            <Link to={"/bicycleAdmin"}>
              <Button variant="contained" startIcon={<AddCircleIcon />}>
                Crear bicicleta
              </Button>
            </Link>
          </Box>

          <Stack
            mt={2}
            spacing={{ xs: 3, sm: 3 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            style={{ justifyContent: "center", width: "100%" }}
          >
            {bicycles.map((bicycle) => (
              <BicycleCardAdmin key={bicycle.serialNumber} bicycle={bicycle} />
            ))}
          </Stack>
        </Container>
        <Box display="flex" justifyContent="center" m={3}>
          <Pagination count={10} size="large" />
        </Box>
      </Box>
    </div>
  );
};
