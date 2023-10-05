import React, { useContext, useState } from "react";
import { UserConext } from "../../../../context/UserContext";
import { MovementContext } from "../../../../context/MovementContext";

const OperatorMovementCreateViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserConext);
  const { products, trucks, create, getAllStockProducts, getAllTrucks } =
    useContext(MovementContext);

  const [values, setValues] = useState({
    product_id: "",
    user_id: user.id!,
    truck_id: "",
    quantity: 0.0,
    reason: "",
    product: products,
    truck: trucks,
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const createMovement = async () => {
    if (isValidForm()) {
      //console.log("VALUES: ", JSON.stringify(values, null, 3));
      setLoading(true);
      const response = await create(values);
      setResponseMessage(response.message);
      setLoading(false);
      if (response.success) {
        resetForm();
        return true; // Indica que la creación fue exitosa
      }
    }
    return false; // Indica que la creación no fue exitosa
  };

  const isValidForm = (): boolean => {
    if (values.product_id === "") {
      setResponseMessage("Seleccione un producto para el movimiento !!");
      return false;
    }
    if (values.quantity === 0) {
      setResponseMessage("Ingrese cuantos productos necesita !!");
      return false;
    }
    if (values.truck_id == "") {
      setResponseMessage("Seleccione un camion para el movimiento !!");
      return false;
    }
    return true;
  };

  const resetForm = async () => {
    setValues({
      product_id: "",
      user_id: user.id!,
      truck_id: "",
      quantity: 0.0,
      reason: "",
      product: [],
      truck: [],
    });
  };

  return {
    ...values,
    products,
    trucks,
    getAllStockProducts,
    getAllTrucks,
    responseMessage,
    loading,
    onChange,
    createMovement,
  };
};

export default OperatorMovementCreateViewModel;
