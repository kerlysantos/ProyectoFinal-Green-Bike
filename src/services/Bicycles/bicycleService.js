import { bicycleInstance } from "./bicycleInstance";

export const getBicycles = () => {
  let bicycles = bicycleInstance.get("/bicicletas/listar-bicis?page=0&size=10");
  return bicycles;
};

export const getBicycleBySerialNumber = (serialNumber) => {
  let bicycle = bicycleInstance.get(
    `/bicicletas/detalle?serialNumber=${serialNumber}`
  );
  return bicycle;
};

export const deleteBicycleById = (id) => {
  return bicycleInstance.delete(`/${id}`);
};

export const updateBicycle = (id, data) => {
  return bicycleInstance.patch(`/${id}`, data);
};

export const createBicycle = (data) => {
  return bicycleInstance.post("/bicicletas", data);
};
