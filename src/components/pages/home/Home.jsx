import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { getBicycles } from "../../../services/Bicycles/bicycleService";
import { BicycleCardUser } from "../../common/BicycleCards/BicycleCardUser";
import { UserCategory } from "../../common/UserCategory/UserCategory";
import SearchIcon from "@mui/icons-material/Search";

/*dividir por tres Bloques*/

const Home = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        const res = await getBicycles();
        const shuffledBicycles = res.data._embedded.bicicletases.sort(
          () => Math.random() - 0.5
        );
        setBicycles(shuffledBicycles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBicycles();
  }, []);

  return (
    <div>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        m={6}
        color={"primary"}
      >
        Bienvenid@ a Green Bikes
      </Typography>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin={4}
        >
          <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            label="Busca tu bici"
            variant="outlined"
            placeholder="Buscar..."
            size="small"
            sx={{ width: "60%" }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon color="primary" />
          </IconButton>
        </Box>
        <Container
          sx={{
            mt: 2,
            pt: 2,
            borderRadius: 2,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="left"
            m={2}
            ml={5}
            color={"primary"}
          >
            CATEGORÍAS
          </Typography>
          <UserCategory />
        </Container>
        <Container
          sx={{
            mt: 2,
            pt: 2,
            borderRadius: 2,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="left"
            m={2}
            ml={5}
            color={"primary"}
          >
            RECOMENDACIONES
          </Typography>
          <Stack
            mt={2}
            mb={2}
            pb={3}
            spacing={{ xs: 3, sm: 3 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            style={{ justifyContent: "center", width: "100%" }}
          >
            {bicycles.map((bicycle) => (
              <BicycleCardUser key={bicycle.id} bicycle={bicycle} />
            ))}
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
