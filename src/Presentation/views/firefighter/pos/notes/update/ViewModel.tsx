import { useState, useContext } from "react";
import { NoteContext } from "../../../../../context/NoteContext";
import { UserConext } from "../../../../../context/UserContext";
import { Note } from "../../../../../../Domain/entities/Note"

const FireFighterUpdateNoteViewModel = (note: Note) => {
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserConext);
    const { update } = useContext(NoteContext)

    const [values, setValues] = useState({
        id: note.id,
        user_id: note.user_id,
        user_name: user.name,
        username: user.username,
        date_time: note.date_time,
        content: note.content
    })

    const updateNote = async () => {
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
        setValues({ ...values, [property]: value });
    };

    const isValidForm = (): boolean => {
        if (values.content === "") {
            setResponseMessage("Ingrese contenido en la Nota !!");
            return false;
        }
        return true;
    };

    const resetForm = async () => {
        setValues({
            id: note.id,
            user_id: note.user_id,
            user_name: '',
            username: '',
            date_time: Date.now(),
            content: ""
        })
    }

    return {
        ...values,
        responseMessage,
        updateNote,
        onChange,
        loading,
    }
}

export default FireFighterUpdateNoteViewModel
