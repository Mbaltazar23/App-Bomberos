import { useContext, useState } from "react";
import { MovementContext } from "../../../../context/MovementContext";
import { UserConext } from "../../../../context/UserContext";
import { Movement } from "../../../../../Domain/entities/Movement";

const OperatorMovementUpdateViewModel = (movement: Movement) => {
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserConext);
  const { update } = useContext(MovementContext);

  const [values, setValues] = useState(movement);

  //console.log("VALUES: ", JSON.stringify(values, null, 3));

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const updateMovement = async () => {
    if (isValidForm()) {
      //console.log("VALUES: ", JSON.stringify(values, null, 3));
      setLoading(true);
      const response = await update(values);
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
    if (values.truck_id === "") {
      setResponseMessage("Seleccione un camion para el movimiento !!");
      return false;
    }
    return true;
  };

  const resetForm = async () => {
    setValues({
      id: "",
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
    responseMessage,
    loading,
    onChange,
    updateMovement,
  };
};

export default OperatorMovementUpdateViewModel;
