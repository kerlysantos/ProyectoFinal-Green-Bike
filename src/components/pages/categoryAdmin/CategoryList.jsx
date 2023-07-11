import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import { AdminCategoryCard } from "../../common/AdminCategories/AdminCategoryCard";

export const CategoryList = ({ categories }) => {
  //Agregar el parámetro
  console.log(categories);
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
              Lista de categorías
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="center"
              m={3}
              maxWidth={"70%"}
            >
              A continuación verás la lista de categorías que has creado hasta
              ahora. Puedes crear una nueva haciendo clic en el botón
              correspondiente.
            </Typography>
          </Box>
          <Link to={"/createCategory"}>
            <Button variant="contained" startIcon={<AddCircleIcon />}>
              Crear categoría
            </Button>
          </Link>

          <Stack
            mt={2}
            mb={5}
            spacing={{ xs: 3, sm: 3 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            style={{ justifyContent: "center", width: "100%" }}
          >
            {categories.map((category) => (
              <AdminCategoryCard key={category.id} category={category} />
            ))}
          </Stack>
        </Container>
      </Box>
    </div>
  );
};
