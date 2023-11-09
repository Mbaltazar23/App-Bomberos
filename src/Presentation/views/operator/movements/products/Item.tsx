import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { OperatorMovementStackParamList } from "../../../../navigator/OperatorMovementNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { DateFormater } from "../../../../utils/DateFormater";
import { Product } from "../../../../../Domain/entities/Product";
import { Truck } from "../../../../../Domain/entities/Truck";

interface Props {
  movement: Truck;
  trucks: Truck[];
  products: Product[];
  option: string;
  navigation: StackNavigationProp<
    OperatorMovementStackParamList,
    "OperatorMovementListScreen",
    undefined
  >;
}
export const OperatorMovementProductListItem = ({
  movement,
  trucks,
  products,
  navigation,
  option,
}: Props) => {
  const [showItems, setShowItems] = useState(false);

  const renderItems = () => {
    if (option === "movement") {
      return (
        <View style={styles.movementsContainer}>
          {movement.movements?.map((movement, index) => (
            <View key={index} style={styles.movementDetails}>
              <Text style={styles.subLabel}>Movimiento #{index + 1}:</Text>
              <Text style={styles.info}>Razón: {movement.reason}</Text>
              <Text style={styles.info}>
                Registrado el {DateFormater(movement.date_time!)}
              </Text>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View style={styles.movementsContainer}>
          {movement.products?.map((product, index) => (
            <View key={index} style={styles.movementDetails}>
              <Text style={styles.subLabel}>Producto #{index + 1}:</Text>
              <Text style={styles.info}>Nombre: {product.name}</Text>
              <Text style={styles.info}>Stock: {product.stock}</Text>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <TouchableOpacity onPress={() => setShowItems(!showItems)}>
      <View style={styles.container}>
        <View style={styles.movementInfoContainer}>
          <Text style={styles.order}>Camion # {movement.id}</Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Marca:</Text> {movement.brand}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Descripción:</Text> {movement.description}
          </Text>
          {showItems && renderItems()}
        </View>
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
    marginBottom: 8,
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
    marginBottom: 6,
  },
  label: {
    fontWeight: "bold",
  },
  subLabel: {
    margin: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  actionImage: {
    width: 30,
    height: 30,
    marginLeft: 30,
  },
  movementsContainer: {
    margin: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  movementDetails: {
    margin: 2,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
