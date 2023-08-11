import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  ToastAndroid,
  View,
  Text,
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
    "OperatorMovementUpdateScreen"
  > {}

export const OperatorMovementUpdateScreen = ({ navigation, route }: Props) => {
  const { movement, products, trucks } = route.params;

  console.log("TRUCKS : ", JSON.stringify(trucks, null, 3));

  const {
    product_id,
    truck_id,
    quantity,
    reason,
    loading,
    onChange,
    responseMessage,
    updateMovement,
  } = useViewModel(movement);

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
        <Text style={styles.textCategory}>
          Camion Seleccionado: {""}
          <Text style={styles.boldText}> {movement.truck[0].name}</Text>
        </Text>
        <Text style={styles.textCategory}>
          Producto Seleccionado:
          <Text style={styles.boldText}> {movement.product[0].name}</Text>
        </Text>
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
              text="EDITAR MOVIMIENTO"
              onPress={() => updateMovement()}
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
