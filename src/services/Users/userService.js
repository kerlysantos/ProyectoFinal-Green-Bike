import { userInstance } from "./userInstance";
import axios from "axios";

// Resto del código...
export const backendURL =
  "http://ec2-52-15-150-70.us-east-2.compute.amazonaws.com/equipo12-api"; // Reemplaza la URL con la URL correcta para el  servidor backend

// Resto del código...

export const getUsers = () => {
  let users = userInstance.get("/users/all");
  return users;
};

export const getUserByEmail = (email) => {
  return userInstance.get(`/users?email=${email}`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const deleteUserById = (id) => {
  return userInstance.delete(`/${id}`);
};

// export const updateUser = (roleId, email) => {
//   return userInstance.patch(`/users/update?id=${roleId}&email=${email}`);
// };


export const updateUser = (roleId, email) => {
  return userInstance.patch(`/users/update?id=${roleId}&email=${email}`);
};


export const createUser = async (userData) => {
  try {
    return await userInstance.post(`/users`, userData);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  const url = `${backendURL}/users/auth`;
  try {
    const response = await axios.post(url, loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
