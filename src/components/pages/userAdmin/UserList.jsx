import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { UserCard } from "../../common/UserCard/UserCard";

export const UserList = ({ users }) => {
  console.log(users);
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
              Lista de usuarios
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="center"
              m={3}
              maxWidth={"70%"}
            >
              A continuación verás la lista de usuarios que has creado hasta
              ahora. Puedes cambiar sus permisos haciendo clic en el botón
              apropiado.
            </Typography>
          </Box>
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
              label="Buscar usuario"
              variant="outlined"
              placeholder="Buscar..."
              size="small"
              sx={{ width: "60%" }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon color="primary" />
            </IconButton>
          </Box>
          <Divider middle />
          <Stack
            mt={2}
            mb={5}
            spacing={{ xs: 3, sm: 3 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            style={{ justifyContent: "center", width: "100%" }}
          >
            {users.map((user) => (
              <UserCard key={user.email} user={user} />
            ))}
          </Stack>
        </Container>
      </Box>
    </div>
  );
};
