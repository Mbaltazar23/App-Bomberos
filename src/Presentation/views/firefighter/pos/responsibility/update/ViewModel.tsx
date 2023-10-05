import { useContext, useState } from "react";
import { ResponsibilityContext } from "../../../../../context/ResponsibilityContext";
import { Responsibility } from "../../../../../../Domain/entities/Responsibility";
import { User } from "../../../../../../Domain/entities/User";

const FireFighterResponsibilityUpdateViewModel = (responsibility: Responsibility, operators: User[]) => {
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { update } = useContext(ResponsibilityContext)

    const [values, setValues] = useState({
        id: responsibility.id!,
        user_id: responsibility.user_id!,
        user_name: responsibility.supervisor[0]?.name,
        username: responsibility.supervisor[0]?.username,
        rol_user: responsibility.supervisor[0]?.roles[0].name,
        supervisor_id: responsibility.supervisor[0]?.id!,
        date_time: responsibility.date_time!,
        supervisor: operators
    });

    const updateResponsibility = async () => {
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

    const onChange = (property: string, value: any) => {
        // Obtén el objeto del usuario seleccionado en base al valor (id)
        const selectedUser = operators.find((user) => user.id === value);
        // Actualiza el valor seleccionado y el nombre del usuario
        setValues({
            ...values,
            [property]: value,
            supervisor_id : responsibility.supervisor[0]?.id!,
            user_name: selectedUser ? selectedUser.name : "", // Asigna el nombre del usuario
            username: selectedUser ? selectedUser.username : "",
            rol_user: selectedUser ? selectedUser.roles[0].name : "",
            date_time: selectedUser ? Date.now() : 0
        });
    };

    const isValidForm = (): boolean => {
        if (values.supervisor_id === "") {
            setResponseMessage("Seleccione un operador a designar !!");
            return false;
        }
        return true;
    };

    const resetForm = async () => {
        setValues({
            id: responsibility.id!,
            user_id: responsibility.user_id!,
            user_name: "",
            username: "",
            rol_user: "",
            supervisor_id: "",
            date_time: 0,
            supervisor: []
        });
    };

    return {
        ...values,
        responseMessage,
        updateResponsibility,
        onChange,
        loading,
    }
}

export default FireFighterResponsibilityUpdateViewModel