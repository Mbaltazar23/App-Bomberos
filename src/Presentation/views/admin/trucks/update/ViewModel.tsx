import React, { useContext, useState } from "react";
import { Truck } from "../../../../../Domain/entities/Truck";
import { TruckContext } from "../../../../context/TruckContext";

const AdminTruckUpdateViewModel = (truck: Truck) => {
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { update } = useContext(TruckContext);
  const [values, setValues] = useState(truck);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const updateTruck = async () => {
    if (isValidForm()) {
      setLoading(true);
      const response = await update(values);
      setResponseMessage(response.message);
      setLoading(false);
      if (response.success) {
        return true; // Indica que la creación fue exitosa
      }
    }
    return false; // Indica que la creación no fue exitosa
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setResponseMessage("Ingrese un nombre para el Camion !!");
      return false;
    }
    if (values.brand === "") {
      setResponseMessage("Ingrese una marca para el Camion !!");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    loading,
    responseMessage,
    updateTruck,
  };
};

export default AdminTruckUpdateViewModel;
