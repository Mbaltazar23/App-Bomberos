import { useContext, useState } from 'react'
import { UserConext } from '../../../context/UserContext';
import { NoteContext } from '../../../context/NoteContext';

const FireFighterDuringViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserConext);
  const { create } = useContext(NoteContext)

  const [values, setValues] = useState({
    user_id: user.id!,
    user_name: user.name,
    username: user.username,
    date_time: Date.now(),
    content: ""
  })

  const createNote  = async () => {
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
      user_id: user.id!,
      user_name: '',
      username: '',
      date_time: Date.now(),
      content: ""
    })
  }

  return {
    ...values,
    responseMessage,
    createNote,
    onChange,
    loading,
  }
}

export default FireFighterDuringViewModel;
