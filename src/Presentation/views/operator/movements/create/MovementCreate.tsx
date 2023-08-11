import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  ToastAndroid,
  View,
} from "react-native";
import { MyColors, MyStyles } from "../../../../theme/AppTheme";
import { OperatorMovementStackParamList } from "../../../../navigator/OperatorMovementNavigator";
import { CustomSelectInput } from "../../../../components/CustomSelectRolInput";
import { StackScreenProps } from "@react-navigation/stack";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { RoundedButton } from "../../../../components/RoundedButton";
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
  extends StackScreenProps<
    OperatorMovementStackParamList,
    "OperatorMovementCreateScreen"
  > {}

export const OperatorMovementCreateScreen = ({ navigation, route }: Props) => {
  const {
    product_id,
    truck_id,
    quantity,
    reason,
    products,
    trucks,
    getAllStockProducts,
    getAllTrucks,
    loading,
    onChange,
    responseMessage,
    createMovement,
  } = useViewModel();

  useEffect(() => {
    getAllStockProducts();
    getAllTrucks();
  }, []);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
      navigation.navigate("OperatorMovementListScreen");
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <View style={styles.categoryInfo}>
        <Image
          source={require("../../../../../../assets/movement.png")}
          style={styles.image}
        />
        
      </View>

      <View style={styles.form}>
        <ScrollView>
          <CustomSelectInput
            placeholder="Seleccione un Camion para el Movimiento"
            options={trucks}
            image={require("../../../../../../assets/truck.png")}
            property="truck_id"
            onSelectChange={onChange}
            selectedValue={truck_id}
          />

          <CustomSelectInput
            placeholder="Seleccione un Producto para el Movimiento"
            options={products}
            image={require("../../../../../../assets/icon_product.png")}
            property="product_id"
            onSelectChange={onChange}
            selectedValue={product_id}
          />

          <CustomTextInput
            placeholder="Razon del Movimiento"
            keyboardType="default"
            image={require("../../../../../../assets/password.png")}
            property="reason"
            onChangeText={onChange}
            value={reason}
          />

          <CustomTextInput
            placeholder="Cantidad de Productos"
            keyboardType="numeric"
            image={require("../../../../../../assets/stock.png")}
            property="quantity"
            onChangeText={onChange}
            value={`${quantity}`}
          />
          <View style={styles.buttonContainer}>
            <RoundedButton
              text="CREAR MOVIMIENTO"
              onPress={() => createMovement()}
            />
          </View>
        </ScrollView>
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
