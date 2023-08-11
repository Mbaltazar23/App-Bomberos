import React, { useEffect } from "react";
import { FlatList, ToastAndroid, View } from "react-native";
import { DeleteConfirmation } from "../../../../components/ConfirmationMessage";
import { OperatorMovementListItem } from "./Item";
import { OperatorMovementStackParamList } from "../../../../navigator/OperatorMovementNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import useViewModel from "./ViewModel";

export const OperatorMovementListScreen = () => {

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
    handleDeleteMovement,
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
          <OperatorMovementListItem
            movement={item}
            products={products}
            trucks={trucks}
            remove={() => handleDeleteMovement(item)}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};
