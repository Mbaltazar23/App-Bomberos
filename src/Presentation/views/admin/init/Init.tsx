import React from "react";
import { Text, View } from "react-native";
import { AdminStackParamList } from "../../../navigator/AdminStackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { RoundedButton } from "../../../components/RoundedButton";
import styles from "./Styles";

interface Props
  extends StackScreenProps<AdminStackParamList, "AdminInitScreen"> {}

export const AdminInitScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Panel del Admin</Text>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="Camiones"
          onPress={() => navigation.navigate("AdminTruckNavigator")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="Productos"
          onPress={() => navigation.navigate("AdminProductNavigator")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="Usuarios"
          onPress={() => navigation.navigate("AdminUserNavigator")}
        />
      </View>
    </View>
  );
};
