import React, { useEffect } from "react";
import { View, Image, ActivityIndicator, ToastAndroid } from "react-native";
import { MyColors, MyStyles } from "../../../../theme/AppTheme";
import { AdminTruckStackParamList } from "../../../../navigator/AdminTruckNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { RoundedButton } from "../../../../components/RoundedButton";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
  extends StackScreenProps<
    AdminTruckStackParamList,
    "AdminTruckCreateScreen"
  > {}

export const AdminTruckCreateScreen = ({ navigation, route }: Props) => {
  const {
    name,
    description,
    brand,
    onChange,
    responseMessage,
    loading,
    createTruck,
  } = useViewModel();

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
      navigation.navigate("AdminTruckListScreen");
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../../assets/truck.png")}
        style={styles.image}
      />

      <View style={styles.form}>
        <CustomTextInput
          placeholder="Nombre del Camion"
          keyboardType="default"
          image={require("../../../../../../assets/icon_truck.png")}
          property="name"
          onChangeText={onChange}
          value={name}
        />
        <CustomTextInput
          placeholder="Marca del Camion"
          keyboardType="default"
          image={require("../../../../../../assets/brand.png")}
          property="brand"
          onChangeText={onChange}
          value={brand}
        />
        <CustomTextInput
          placeholder="Descripcion del Camion"
          keyboardType="default"
          image={require("../../../../../../assets/description.png")}
          property="description"
          onChangeText={onChange}
          value={description}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton text="CREAR CAMION" onPress={() => createTruck()} />
      </View>
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
