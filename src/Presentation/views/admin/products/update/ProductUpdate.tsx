import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Image,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { MyStyles, MyColors } from "../../../../theme/AppTheme";
import { AdminProductStackParamList } from "../../../../navigator/AdminProductNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { ModalPickImage } from "../../../../components/ModalPickImage";
import { RoundedButton } from "../../../../components/RoundedButton";
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
  extends StackScreenProps<
    AdminProductStackParamList,
    "AdminProductUpdateScreen"
  > {}

export const AdminProductUpdateScreen = ({ navigation, route }: Props) => {
  const { product } = route.params;
  const {
    name,
    description,
    stock,
    onChange,
    responseMessage,
    loading,
    takePhoto,
    pickImage,
    image,
    updateProduct,
    modalVisible,
    setModalVisible,
  } = useViewModel(product);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  const handleUpdateProduct = async() => {
    const isSuccess = await updateProduct()
    if (isSuccess) {
      navigation.navigate("AdminProductListScreen");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => setModalVisible(true)}
        >
          {image == "" ? (
            <Image
              source={require("../../../../../../assets/image_new.png")}
              style={styles.image}
            />
          ) : (
            <Image source={{ uri: image }} style={styles.image} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <View style={styles.categoryInfo}></View>

          <CustomTextInput
            placeholder="Nombre del producto"
            keyboardType="default"
            image={require("../../../../../../assets/categories.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />
          <CustomTextInput
            placeholder="Descripcion"
            keyboardType="default"
            image={require("../../../../../../assets/description.png")}
            property="description"
            onChangeText={onChange}
            value={description}
          />
          <CustomTextInput
            placeholder="Stock"
            keyboardType="numeric"
            image={require("../../../../../../assets/stock.png")}
            property="stock"
            onChangeText={onChange}
            value={`${stock}`}
          />
          <View style={styles.buttonContainer}>
            <RoundedButton
              text="ACTUALIZAR PRODUCTO"
              onPress={() => handleUpdateProduct()}
            />
          </View>
        </ScrollView>
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />

      {loading && (
        <ActivityIndicator
          style={MyStyles.loading}
          size="large"
          color={MyColors.primary}
        />
      )}
    </View>
  );
};
