import axios from "axios";

export const userInstance = axios.create({
  baseURL:
    "http://ec2-52-15-150-70.us-east-2.compute.amazonaws.com:8080/equipo12-api",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "aplication json",
  // },
});
