import React, { useContext, useState } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";
import { UserConext } from "../../context/UserContext";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { user, saveUserSesion } = useContext(UserConext);
  console.log("Usuario en Sesion : " + JSON.stringify(user));

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("response : " + JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        saveUserSesion(response.data);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Ingrese un correo electronico");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingrese un password");
      return false;
    }
    return true;
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  return {
    ...values,
    onChange,
    errorMessage,
    login,
    user,
  };
};

export default HomeViewModel;
