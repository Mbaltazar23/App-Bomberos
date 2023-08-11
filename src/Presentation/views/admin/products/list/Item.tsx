import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AdminProductStackParamList } from "../../../../navigator/AdminProductNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../../../../Domain/entities/Product";

interface Props {
  product: Product;
  remove: (product: Product) => void;
}

export const AdminProductListItem = ({ product, remove }: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<AdminProductStackParamList>>();
    
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AdminProductUpdateScreen", { product: product })
      }
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.info}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Disponibles: {product.stock}</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={() => remove(product)}>
            <Image
              style={styles.actionImage}
              source={require("../../../../../../assets/trash.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 90,
    marginHorizontal: 20,
    marginTop: 10,
    paddingTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 15,
  },
  description: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 3,
  },
  price: {
    color: "green",
    fontSize: 12,
    fontWeight: "bold",
  },
  actionContainer: {
    marginRight: 40,
  },
  actionImage: {
    width: 40,
    height: 40,
    marginVertical: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#f2f2f2",
    marginHorizontal: 30,
    flex: 1,
  },
});
