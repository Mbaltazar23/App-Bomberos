import { useContext, useState } from "react";
import { UserConext } from "../../../../context/UserContext";
import { Rol } from "../../../../../Domain/entities/Rol";

const AdminUserCreateViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { create } = useContext(UserConext);

  const roles: Rol[] = [
    { id: "1", name: "Administrador" },
    { id: "2", name: "Operador" },
    { id: "3", name: "Bombero" }
  ];

  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
    id_rol: "",
    roles: roles,
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const createUser = async () => {
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
    createUser,
    roles,
  };
};

export default AdminUserCreateViewModel;
