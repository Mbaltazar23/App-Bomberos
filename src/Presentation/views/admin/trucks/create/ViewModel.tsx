import React, { useContext, useState } from "react";
import { TruckContext } from "../../../../context/TruckContext";

const AdminTruckCreateViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { create } = useContext(TruckContext);
  const [values, setValues] = useState({
    name: "",
    brand: "",
    description: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const createTruck = async () => {
    if (isValidForm()) {
      setLoading(true);
      const response = await create(values);
      setResponseMessage(response.message);
      setLoading(false);
      resetForm();
    }
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

  const resetForm = async () => {
    setValues({
      name: "",
      description: "",
      brand: "",
    });
  };

  return {
    ...values,
    onChange,
    loading,
    responseMessage,
    createTruck
  };
};

export default AdminTruckCreateViewModel;
