import React, { useState } from "react";
import { ApiAmistApp } from "../../../Data/sources/remote/api/ApiAmistApp";
import { ResetPasswordAuthUseCase } from "../../../Domain/useCases/auth/ResetPasswordEmailAuth";

const ResetPasswordViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const resetPassEmail = async () => {
    if (isValidEmail()) {
      const response = await ResetPasswordAuthUseCase(values.email);
      console.log("RESPONSE: " + JSON.stringify(response));
    }
  };

  const isValidEmail = (): boolean => {
    if (values.email === "") {
      setErrorMessage("El Email es requerido para recuperar ");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    resetPassEmail,
    errorMessage
  };
};

export default ResetPasswordViewModel;
