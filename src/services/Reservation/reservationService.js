import { reservationInstance } from "./reservationInstance";

export const createReservation = (data) => {
  return reservationInstance.post("/reservation", data);
};
