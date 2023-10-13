import React, { useContext, useState } from "react";
import { UserConext } from "../../../../context/UserContext";
import { Rol } from "../../../../../Domain/entities/Rol";
import { User } from "../../../../../Domain/entities/User";

const AdminUpdateUserViewModel = (user: User) => {
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { update } = useContext(UserConext);

  const roles: Rol[] = [
    { id: "1", name: "Administrador" },
    { id: "2", name: "Operador" },
    { id: "3", name: "Bombero" }
  ];

  const [values, setValues] = useState({
    id: user.id!,
    name: user.name,
    username: user.username,
    password: "",
    id_rol: user.roles[0].id!, // Convertir el número a una cadena
    roles: roles,
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const updateUser = async () => {
    if (isValidForm()) {
      //console.log("VALUES: ", JSON.stringify(values, null, 3));
      setLoading(true);
      const response = await update(values);
      setResponseMessage(response.message);
      setLoading(false);
      resetForm();
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setResponseMessage("Ingrese un nombre para el Usuario !!");
      return false;
    }
    if (values.username === "") {
      setResponseMessage("Ingrese un nombre o correo para el Usuario !!");
      return false;
    }
    if (values.id_rol == "") {
      setResponseMessage("Ingrese una rol para el Usuario !!");
      return false;
    }
    return true;
  };

  const resetForm = async () => {
    setValues({
      id: "",
      name: "",
      username: "",
      password: "",
      id_rol: "",
      roles: roles,
    });
  };

  return {
    ...values,
    onChange,
    loading,
    responseMessage,
    updateUser,
    roles,
  };
};

export default AdminUpdateUserViewModel;
