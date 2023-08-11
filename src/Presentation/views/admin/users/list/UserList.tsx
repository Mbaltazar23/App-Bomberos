import React, { useEffect } from "react";
import { FlatList, ToastAndroid, View } from "react-native";
import { DeleteConfirmation } from "../../../../components/ConfirmationMessage";
import { AdminUserListItem } from "./Item";
import useViewModel from "./ViewModel";

export const AdminUserListScreen = () => {
  const {
    users,
    responseMessage,
    getAllUsers,
    showDeleteConfirmation,
    handleDeleteUser,
    handleConfirmDeleteUser,
    handleCancelDeleteUser,
  } = useViewModel();

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <DeleteConfirmation
        type="user"
        onConfirm={handleConfirmDeleteUser}
        onCancel={handleCancelDeleteUser}
        visible={showDeleteConfirmation}
      />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <AdminUserListItem
            user={item}
            remove={() => handleDeleteUser(item)}
          />
        )}
      />
    </View>
  );
};
