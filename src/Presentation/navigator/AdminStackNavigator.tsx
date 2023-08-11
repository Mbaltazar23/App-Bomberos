import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminProductNavigator } from "./AdminProductNavigator";
import { AdminUserNavigator } from "./AdminUserNavigator";
import { AdminTruckNavigator } from "./AdminTruckNavigator";
import { AdminInitScreen } from "../views/admin/init/Init";

export type AdminStackParamList = {
  AdminInitScreen: undefined;
  AdminTruckNavigator: undefined;
  AdminProductNavigator: undefined;
  AdminUserNavigator:undefined
};

const Stack = createNativeStackNavigator<AdminStackParamList>();

export const AdminStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AdminInitScreen"
        component={AdminInitScreen}
        options={{
          headerShown: true,
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="AdminTruckNavigator"
        component={AdminTruckNavigator}
      />
      <Stack.Screen
        name="AdminProductNavigator"
        component={AdminProductNavigator}
      />
       <Stack.Screen
        name="AdminUserNavigator"
        component={AdminUserNavigator}
      />
    </Stack.Navigator>
  );
};
