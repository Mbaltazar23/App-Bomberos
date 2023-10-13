import React, { useEffect } from "react";
import { ActivityIndicator, Image, ToastAndroid, View } from "react-native";
import { AdminTruckStackParamList } from "../../../../navigator/AdminTruckNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { MyColors, MyStyles } from "../../../../theme/AppTheme";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { RoundedButton } from "../../../../components/RoundedButton";
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
  extends StackScreenProps<
    AdminTruckStackParamList,
    "AdminTruckUpdateScreen"
  > {}
  
export const AdminTruckUpdateScreen = ({ navigation, route }: Props) => {
  const { truck } = route.params;
  const {
    name,
    description,
    brand,
    onChange,
    responseMessage,
    loading,
    updateTruck,
  } = useViewModel(truck);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
      navigation.navigate("AdminTruckListScreen");
    }
  }, [responseMessage]);

  const handleUpdateTruck = async() => {
    const isSuccess = await updateTruck()
    if (isSuccess) {
      navigation.navigate("AdminTruckListScreen");
    }
  }

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
        <RoundedButton text="CREAR CAMION" onPress={() => handleUpdateTruck()} />
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
