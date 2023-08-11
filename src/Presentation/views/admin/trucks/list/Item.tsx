import React from "react";
import { Truck } from "../../../../../Domain/entities/Truck";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { AdminTruckStackParamList } from "../../../../navigator/AdminTruckNavigator";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  truck: Truck;
  remove: (id: string) => void;
  navigation: StackNavigationProp<
    AdminTruckStackParamList,
    "AdminTruckListScreen",
    undefined
  >;
}

export const AdminTruckListItem = ({ truck, remove, navigation }: Props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AdminTruckUpdateScreen", { truck: truck })
      }
    >
      <View style={styles.container}>
        <View style={styles.truckInfoContainer}>
          <Text style={styles.order}>Camion # {truck.id}</Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Nombre:</Text> {truck.name}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Modelo:</Text> {truck.brand}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Descripcion:</Text> {truck.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => remove(truck.id!)}>
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
  truckInfoContainer: {
    flex: 1,
  },
  order: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginBottom: 8, // Ajusta este valor para bajar o subir el campo "Camion #"
    elevation:10
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
