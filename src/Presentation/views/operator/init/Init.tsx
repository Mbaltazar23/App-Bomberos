import React from "react";
import { OperatorStackParamList } from "../../../navigator/OperatorStackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { RoundedButton } from "../../../components/RoundedButton";
import { View, Text } from "react-native";
import styles from "./Styles";

interface Props
  extends StackScreenProps<OperatorStackParamList, "OperatorInitScreen"> { }

export const OperatorInitScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Panel del Operador</Text>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="Movimientos "
          onPress={() => navigation.navigate("OperatorMovementNavigator")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="Stock por Camion "
          onPress={() => navigation.navigate("OperatorProductNavigator")}
        />
      </View>
    </View>
  );
};
