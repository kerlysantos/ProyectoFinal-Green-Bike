import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import SaveIcon from "@mui/icons-material/Save";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Navigate, useNavigate } from "react-router";
import { createCategory } from "../../../services/Categories/categoriesService";
import { useState } from "react";
import { useEffect } from "react";

export const CreateCategoryContainer = () => {
  const [selectedFileName, setSelectedFileName] = useState();
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e, propiedad) => {
    setCategory({ ...category, [propiedad]: e.target.value });
    setErrors({ ...errors, [propiedad]: "" });
  };

  const handleFileChange = (e, propiedad) => {
    if (propiedad === "image") {
      const fileName = e.target.files[0]?.name;
      setSelectedFileName(fileName);
    }
    setCategory({ ...category, [propiedad]: e.target.value });
  };

  useEffect(() => {}, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    let hasErrors = false;
    const updatedErrors = {};

    for (const key in category) {
      if (category[key] === "") {
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
      categoryName: category.name,
      description: category.description,
    };

    try {
      await createCategory(data);
      console.log(data);
      navigate("/categoryList");
    } catch (error) {
      console.log(error);
    }
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
        Crear categoría
      </Typography>

      <Typography
        gutterBottom
        variant="body1"
        component="div"
        align="center"
        m={4}
      >
        Ingresa los datos para crear una nueva categoría.
      </Typography>

      <Box
        m="auto"
        mb={"30px"}
        alignItems="center"
        alignContent={"center"}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          width: "350px",
          border: 1,
          borderColor: "#f0f0f5",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="column"
          useFlexGap
          flexWrap="wrap"
          m={"10px"}
        >
          <TextField
            error={!!errors.name}
            label="Nombre"
            value={category.name}
            onChange={(e) => handleChange(e, "name")}
            helperText={errors.name}
          />

          <TextField
            error={!!errors.description}
            multiline
            rows={4}
            label="Descripción"
            value={category.description}
            onChange={(e) => handleChange(e, "description")}
            helperText={errors.description}
          ></TextField>
        </Stack>
        <Stack m={"20px"} spacing={2} direction="column">
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
