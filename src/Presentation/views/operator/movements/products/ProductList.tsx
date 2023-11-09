import React, { useEffect } from "react";
import { FlatList, ToastAndroid, View } from "react-native";
import { OperatorMovementStackParamList } from "../../../../navigator/OperatorMovementNavigator";
import { OperatorMovementProductListItem } from "./Item";
import { StackNavigationProp } from "@react-navigation/stack";
import { DeleteConfirmation } from "../../../../components/ConfirmationMessage";
import { useNavigation } from "@react-navigation/native";
import useViewModel from "./ViewModel";

export const OperatorMovementProductListScreen = () => {

  const navigation =
    useNavigation<
      StackNavigationProp<
        OperatorMovementStackParamList,
        "OperatorMovementListScreen"
      >
    >();

  const {
    user,
    movements,
    products,
    trucks,
    getAllStockProducts,
    getAllTrucks,
    responseMessage,
    getMovementsByUser,
    showDeleteConfirmation,
    handleConfirmDeleteMovement,
    handleCancelDeleteMovement,
  } = useViewModel();

  useEffect(() => {
    getMovementsByUser(user.id!);
    getAllStockProducts()
    getAllTrucks()
  }, []);

  //console.log("MOVEMENTS: ", JSON.stringify(movements, null,3));
  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <DeleteConfirmation
        type="movement"
        onConfirm={handleConfirmDeleteMovement}
        onCancel={handleCancelDeleteMovement}
        visible={showDeleteConfirmation}
      />

      <FlatList
        data={movements}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <OperatorMovementProductListItem
            movement={item}
            products={products}
            option="product"
            trucks={trucks}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};
