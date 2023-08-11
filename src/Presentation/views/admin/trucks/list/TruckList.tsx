import React, { useEffect } from "react";
import { FlatList, ToastAndroid, View } from "react-native";
import { AdminTruckStackParamList } from "../../../../navigator/AdminTruckNavigator";
import { AdminTruckListItem } from "./Item";
import { DeleteConfirmation } from "../../../../components/ConfirmationMessage";
import { StackScreenProps } from "@react-navigation/stack";
import useViewModel from "./ViewModel";

interface Props
  extends StackScreenProps<AdminTruckStackParamList, "AdminTruckListScreen"> {}

export const AdminTruckListScreen = ({ navigation, route }: Props) => {
  const {
    trucks,
    getAllTrucks,
    responseMessage,
    handleConfirmDeleteTruck,
    handleCancelDeleteTruck,
    showDeleteConfirmation,
    handleDeleteTruck,
  } = useViewModel();

  useEffect(() => {
    getAllTrucks()
  }, [])
  

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <DeleteConfirmation
        type="truck"
        onConfirm={handleConfirmDeleteTruck}
        onCancel={handleCancelDeleteTruck}
        visible={showDeleteConfirmation}
      />

      <FlatList
        data={trucks}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <AdminTruckListItem
            truck={item}
            remove={() => handleDeleteTruck(item)}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};
