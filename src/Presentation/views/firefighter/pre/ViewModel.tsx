import { useContext, useState } from "react";
import { ResponsibilityContext } from "../../../context/ResponsibilityContext";
import { UserConext } from "../../../context/UserContext";

const FireFighterPreViewModel = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { operators, create, getAllOperators } = useContext(ResponsibilityContext)
    const { user } = useContext(UserConext);

    const [values, setValues] = useState({
        user_id: user.id!,
        user_name: "",
        username: "",
        rol_user: "",
        supervisor_id: "",
        date_time: Date.now(),
        supervisor: operators,
    });

    const createResponsibility = async () => {
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

    const onChange = (property: string, value: any) => {
        // Obtén el objeto del usuario seleccionado en base al valor (id)
        const selectedUser = operators.find((user) => user.id === value);
        // Actualiza el valor seleccionado y el nombre del usuario
        setValues({
            ...values,
            [property]: value,
            user_name: selectedUser ? selectedUser.name : "", // Asigna el nombre del usuario
            username: selectedUser ? selectedUser.username : "",
            rol_user: selectedUser ? selectedUser.roles[0].name : "",
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
            user_id: user.id!,
            user_name: "",
            username: "",
            rol_user: "",
            supervisor_id: "",
            date_time: 0,
            supervisor: [],
        });
    };

    return {
        ...values,
        responseMessage,
        createResponsibility,
        onChange,
        loading,
        getAllOperators,
        operators,
    }
}

export default FireFighterPreViewModel;