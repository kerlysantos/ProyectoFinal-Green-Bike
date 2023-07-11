import { useEffect, useState } from "react";
import { Alert, Button, MenuItem, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import SaveIcon from "@mui/icons-material/Save";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Navigate, useNavigate } from "react-router";
import { createBicycle } from "../../../services/Bicycles/bicycleService";
import { Category } from "@mui/icons-material";
import { getCategories } from "../../../services/Categories/categoriesService";

export const BicycleAdminContainer = () => {
  const [categories, setCategories] = useState({});
  const [selectedFileName, setSelectedFileName] = useState("");
  const [bicycle, setBicycle] = useState({
    serialNumber: "",
    size: "",
    location: "",
    pricePerHour: "",
    state: "",
    type: "",
    needReparation: "",
  });
  const [errors, setErrors] = useState({
    serialNumber: "",
    size: "",
    location: "",
    pricePerHour: "",
    state: "",
    type: "",
    needReparation: "",
    image: "",
  });

  useEffect(() => {
    const Categories = getCategories();
    console.log("EFFECT CALL: ", Categories);

    Categories.then((res) => {
      console.log("promise resolved: ", res);
      setCategories(res.data._embedded.categoriesDtoes);
    }).catch((err) => {
      console.error("Error:", err);
    });
  }, []);

  const navigate = useNavigate();

  const handleChange = (e, propiedad) => {
    setBicycle({ ...bicycle, [propiedad]: e.target.value });
    setErrors({ ...errors, [propiedad]: "" });
  };

  const handleFileChange = (e, propiedad) => {
    if (propiedad === "image") {
      const fileName = e.target.files[0]?.name;
      setSelectedFileName(fileName);
    }
    setBicycle({ ...bicycle, [propiedad]: e.target.value });
  };

  const handleKeyDown = (e, propiedad) => {
    const keyCode = e.keyCode || e.which;

    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      e.preventDefault(); // Prevent the letter from being entered
      if (propiedad === "price_per_hour") {
        setErrors({
          ...errors,
          pricePerHour: "Solo acepta números",
        });
      }
    } else {
      setErrors({
        ...errors,
        pricePerHour: "", // Clear the error if the input is valid
      });
    }
  };

  useEffect(() => {}, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    let hasErrors = false;
    const updatedErrors = {};

    for (const key in bicycle) {
      if (bicycle[key] === "") {
        updatedErrors[key] = "Campo obligatorio";
        hasErrors = true;
      }
    }

    console.log(errors);
    if (hasErrors) {
      setErrors(updatedErrors);

      return;
    }

    let data = {
      serialNumber: bicycle.serialNumber,
      size: bicycle.size,
      location: bicycle.location,
      pricePerHour: Number(bicycle.pricePerHour),
      state: bicycle.state,
      type: bicycle.type,
      needReparation: bicycle.needReparation,
    };

    try {
      await createBicycle(data);
      navigate("/bicycleList");
    } catch (error) {
      console.log(error);
    }

    // console.log(data);
    // const create = createBicycle(data);
    // create.then((res) => console.log(res)).catch((err) => console.log(err));
    // navigate("/bicycleList");
  };

  return (
    <div>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        mt={2}
        color={"primary"}
      >
        Crear bicicleta
      </Typography>

      <Typography
        gutterBottom
        variant="body1"
        component="div"
        align="center"
        m={4}
      >
        Ingresa los datos para crear una nueva bicicleta. Recuerda que el número
        de serie es único y no podrás reutilizarlo para crear bicicletas.
      </Typography>

      <Box
        m="auto"
        mb={"30px"}
        alignItems="center"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          width: "80%",
          border: 1,
          borderColor: "#f0f0f5",
          align: "center",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          m={"10px"}
        >
          <TextField
            error={!!errors.serialNumber}
            label="Serial"
            value={bicycle.serialNumber}
            onChange={(e) => handleChange(e, "serialNumber")}
            helperText={errors.serialNumber}
          />
          <TextField
            error={!!errors.size}
            select
            label="Size"
            value={bicycle.size}
            onChange={(e) => handleChange(e, "size")}
            helperText={errors.size}
          >
            <MenuItem value={"Infantil"}>Infantil</MenuItem>
            <MenuItem value={"S"}>Talla S</MenuItem>
            <MenuItem value={"M"}>Talla M</MenuItem>
            <MenuItem value={"L"}>Talla L</MenuItem>
          </TextField>
          <TextField
            error={!!errors.type}
            select
            label="Tipo"
            value={bicycle.type}
            onChange={(e) => handleChange(e, "type")}
            helperText={errors.type}
          >
            <MenuItem value="BMX">BMX</MenuItem>
            <MenuItem value="Ciudad">Ciudad</MenuItem>
            <MenuItem value="Infantil">BMX</MenuItem>
            <MenuItem value="Electrica">Electrica</MenuItem>
          </TextField>

          <TextField
            error={!!errors.location}
            select
            label="Ubicación"
            value={bicycle.location}
            onChange={(e) => handleChange(e, "location")}
            helperText={errors.location}
          >
            <MenuItem value={"Obelisco"}>Obelisco</MenuItem>
            <MenuItem value={"Puerto"}>Puerto Madero</MenuItem>
            <MenuItem value={"palermo"}>Palermo</MenuItem>
            <MenuItem value={"Recoleta"}>Recoleta</MenuItem>
          </TextField>
          <TextField
            error={!!errors.pricePerHour}
            label="Precio hora"
            value={bicycle.pricePerHour}
            onKeyDown={(e) => handleKeyDown(e, "pricePerHour")}
            onChange={(e) => handleChange(e, "pricePerHour")}
            helperText={errors.pricePerHour}
          ></TextField>
          <TextField
            error={!!errors.state}
            select
            label="Estado"
            value={bicycle.state}
            onKeyDown={handleKeyDown}
            onChange={(e) => handleChange(e, "state")}
            helperText={errors.state}
          >
            <MenuItem value={false}>No disponible</MenuItem>
            <MenuItem value={true}>Disponible</MenuItem>
          </TextField>
          <TextField
            error={!!errors.needReparation}
            select
            label="Necesita reparación"
            value={bicycle.needReparation}
            onChange={(e) => handleChange(e, "needReparation")}
            helperText={errors.needReparation}
          >
            <MenuItem value={"no"}>No</MenuItem>
            <MenuItem value={"si"}>Si</MenuItem>
          </TextField>
        </Stack>
        <Stack m={"20px"} spacing={2} direction="row">
          <Button
            variant="outlined"
            startIcon={<FileUploadIcon />}
            component="label"
          >
            Subir imagen
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => handleFileChange(e, "image")}
            />
          </Button>
          {selectedFileName && (
            <Alert severity="info">{selectedFileName}</Alert>
          )}
        </Stack>

        <Stack m={"20px"} spacing={2} direction="row">
          <Button type="submit" variant="contained" startIcon={<SaveIcon />}>
            Guardar
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
