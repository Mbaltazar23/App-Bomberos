import React, { useEffect } from "react";
import { FlatList, ToastAndroid, View } from "react-native";
import { AdminProductListItem } from "./Item";
import { DeleteConfirmation } from "../../../../components/ConfirmationMessage";
import useViewModel from "./ViewModel";

export const AdminProductListScreen = () => {
  const {
    products,
    getAllProducts,
    responseMessage,
    showDeleteConfirmation,
    handleCancelDeleteProduct,
    handleConfirmDeleteProduct,
    handleDeleteProduct,
  } = useViewModel();
  //console.log("Category: " + JSON.stringify(category));

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <DeleteConfirmation
        type="product"
        onConfirm={handleConfirmDeleteProduct}
        onCancel={handleCancelDeleteProduct}
        visible={showDeleteConfirmation}
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <AdminProductListItem
            product={item}
            remove={() => handleDeleteProduct(item)}
          />
        )}
      />
    </View>
  );
};
