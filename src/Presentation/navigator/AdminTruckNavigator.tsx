import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, TouchableOpacity } from "react-native";
import { AdminTruckCreateScreen } from "../views/admin/trucks/create/TruckCreate";
import { AdminTruckUpdateScreen } from "../views/admin/trucks/update/TruckUpdate";
import { AdminTruckListScreen } from "../views/admin/trucks/list/TruckList";
import { Truck } from "../../Domain/entities/Truck";
import { TruckProvider } from "../context/TruckContext";

export type AdminTruckStackParamList = {
  AdminTruckListScreen: undefined;
  AdminTruckCreateScreen: undefined;
  AdminTruckUpdateScreen: { truck: Truck };
};

const Stack = createNativeStackNavigator<AdminTruckStackParamList>();

export const AdminTruckNavigator = () => {
  return (
    <TruckState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AdminTruckListScreen"
          component={AdminTruckListScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: "Camiones",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AdminTruckCreateScreen")}
              >
                <Image
                  source={require("../../../assets/add.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AdminTruckCreateScreen"
          component={AdminTruckCreateScreen}
          options={{
            headerShown: true,
            title: "Nuevo Camion",
          }}
        />
        <Stack.Screen
          name="AdminTruckUpdateScreen"
          component={AdminTruckUpdateScreen}
          options={{
            headerShown: true,
            title: "Editar Camion",
          }}
        />
      </Stack.Navigator>
    </TruckState>
  );
};

const TruckState = ({ children }: any) => {
  return <TruckProvider>{children}</TruckProvider>;
};
