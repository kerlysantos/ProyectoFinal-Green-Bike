import React, { useEffect, useState } from "react";
import { BicycleDetailAdmin } from "./BicycleDetailAdmin";
import { useParams } from "react-router";
import { getBicycleBySerialNumber } from "../../../services/Bicycles/bicycleService";

export const BicycleDetailAdminContainer = ({}) => {
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
      <BicycleDetailAdmin bicycle={bicycle} />
    </div>
  );
};
