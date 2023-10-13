import React, { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { AdminProductStackParamList } from "../../../../navigator/AdminProductNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { RoundedButton } from "../../../../components/RoundedButton";
import { ModalPickImage } from "../../../../components/ModalPickImage";
import { MyColors, MyStyles } from "../../../../theme/AppTheme";
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
  extends StackScreenProps<
    AdminProductStackParamList,
    "AdminProductCreateScreen"
  > {}

export const AdminProductCreateScreen = ({ navigation, route }: Props) => {
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
    createProduct,
    modalVisible,
    setModalVisible,
  } = useViewModel();

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  const handleCreateProduct = async() => {
    const isSuccess = await createProduct()
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
              text="CREAR PRODUCTO"
              onPress={() => handleCreateProduct()}
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
