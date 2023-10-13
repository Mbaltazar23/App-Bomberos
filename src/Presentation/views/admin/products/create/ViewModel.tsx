import { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ProductContext } from "../../../../context/ProductContext";

const AdminProductCreateViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const { create } = useContext(ProductContext);
  const [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
    stock: 0.0,
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const createProduct = async () => {
    console.log("Producto Formulario : " + JSON.stringify(values));
    if (isValidForm()) {
      setLoading(true);
      const response = await create(values, file!);
      setResponseMessage(response.message);
      setLoading(false);
      if (response.success) {
        resetForm();
        return true; // Indica que la creación fue exitosa
      }
    }
    return false; // Indica que la creación no fue exitosa
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setResponseMessage("Ingrese un nombre para el Producto !!");
      return false;
    }
    if (values.stock == 0) {
      setResponseMessage("Ingrese un valor en el stock al Producto!!");
      return false;
    }
    return true;
  };

  const resetForm = async () => {
    setValues({
      name: "",
      description: "",
      image: "",
      stock: 0.0,
    });
  };

  return {
    ...values,
    onChange,
    takePhoto,
    pickImage,
    createProduct,
    loading,
    responseMessage,
    modalVisible,
    setModalVisible,
  };
};

export default AdminProductCreateViewModel;
