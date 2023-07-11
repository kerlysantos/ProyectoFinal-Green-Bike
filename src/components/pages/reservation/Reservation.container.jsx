import React, { useEffect, useState } from "react";
import { Reservation } from "./reservation";
import { useParams } from "react-router";
import { getBicycleBySerialNumber } from "../../../services/Bicycles/bicycleService";

export const ReservationContainer = ({}) => {
  const [bicycle, setBicycle] = useState([]);

  const { serialNumber } = useParams();

  useEffect(() => {
    const fetchBicycle = async () => {
      try {
        const res = await getBicycleBySerialNumber(serialNumber);
        setBicycle(res.data.Message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBicycle();
  }, []);

  console.log(bicycle);

  return (
    <div>
      <Reservation bicycle={bicycle} />
    </div>
  );
};
