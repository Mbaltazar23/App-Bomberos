import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { OperatorMovementStackParamList } from "../../../../navigator/OperatorMovementNavigator";
import { Movement } from "../../../../../Domain/entities/Movement";
import { StackNavigationProp } from "@react-navigation/stack";
import { DateFormater } from "../../../../utils/DateFormater";
import { Truck } from "../../../../../Domain/entities/Truck";
import { Product } from "../../../../../Domain/entities/Product";

interface Props {
  movement: Movement;
  trucks: Truck[]
  products: Product[]
    remove: (id: string) => void;
  navigation: StackNavigationProp<
    OperatorMovementStackParamList,
    "OperatorMovementListScreen",
    undefined
  >;
}

export const OperatorMovementListItem = ({
  movement,
  trucks,
  products,
  remove,
  navigation,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("OperatorMovementUpdateScreen", {
          movement: movement,
          trucks:trucks,
          products:products
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.movementInfoContainer}>
          <Text style={styles.order}>Movimiento # {movement.id!}</Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Camion:</Text> {movement.truck[0]?.name}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Producto:</Text> {movement.product[0]?.name}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Desde  :</Text>
            {DateFormater(movement.date_time!)}
          </Text>
        </View>
        <TouchableOpacity onPress={() => remove(movement.id!)}>
          <Image
            style={styles.actionImage}
            source={require("../../../../../../assets/trash.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  movementInfoContainer: {
    flex: 1,
  },
  order: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginBottom: 8, // Ajusta este valor para bajar o subir el campo "Camion #"
    elevation: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#e2e2e2",
    marginTop: 10,
  },
  info: {
    fontSize: 13,
    marginBottom: 2,
  },
  label: {
    fontWeight: "bold",
  },
  actionImage: {
    width: 30,
    height: 30,
    marginLeft: 30,
  },
});
