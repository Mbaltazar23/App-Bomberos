import { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ResponseApiBombero } from "../../../../../Data/sources/remote/models/ResponseApiBombero";
import { ProductContext } from "../../../../context/ProductContext";
import { Product } from "../../../../../Domain/entities/Product";

const AdminProductUpdateViewModel = (product: Product) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log("Producto: " + JSON.stringify(product));

  const [values, setValues] = useState(product);

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

  const { update, updateWithImages } = useContext(ProductContext);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const updateProduct = async () => {
    console.log("Producto Formulario : " + JSON.stringify(values));
    let response = {} as ResponseApiBombero;

    if (isValidForm()) {
      if (values.image?.includes("https://")) {
        // ACTUALIZAR SIN IMAGEN
        response = await update(values);
      } else {
        response = await updateWithImages(values, file!);
      }
      setResponseMessage(response.message);
      setLoading(false);
      if (response.success) {
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

  return {
    ...values,
    onChange,
    takePhoto,
    pickImage,
    updateProduct,
    loading,
    responseMessage,
    modalVisible,
    setModalVisible,
  };
};

export default AdminProductUpdateViewModel;
