import React, { useEffect, useState } from "react";
import { BicycleList } from "./BicycleList";
import { getBicycles } from "../../../services/Bicycles/bicycleService";

export const BicycleListContainer = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    const Bicycles = getBicycles();
    Bicycles.then((res) => {
      console.log(res);
      setBicycles(res.data._embedded.bicicletases);
    }).catch((err) => {
      console.error("Error:", err);

      setError(err);
    });
  }, []);

  return (
    <div>
      <BicycleList bicycles={bicycles} />
    </div>
  );
};
