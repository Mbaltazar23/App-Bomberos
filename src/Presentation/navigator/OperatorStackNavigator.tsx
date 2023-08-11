import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OperatorInitScreen } from "../views/operator/init/Init";
import { OperatorMovementNavigator } from "./OperatorMovementNavigator";

export type OperatorStackParamList = {
  OperatorInitScreen: undefined;
  OperatorMovementNavigator: undefined;
};

const Stack = createNativeStackNavigator<OperatorStackParamList>();

export const OperatorStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="OperatorInitScreen"
        component={OperatorInitScreen}
        options={{
          headerShown: true,
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="OperatorMovementNavigator"
        component={OperatorMovementNavigator}
      />
    </Stack.Navigator>
  );
};
