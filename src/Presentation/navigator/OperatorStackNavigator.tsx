import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OperatorMovementNavigator } from "./OperatorMovementNavigator";
import { OperatorProductNavigator } from "./OperatorProductNavigator";
import { OperatorInitScreen } from "../views/operator/init/Init";

export type OperatorStackParamList = {
  OperatorInitScreen: undefined;
  OperatorMovementNavigator: undefined;
  OperatorProductNavigator:undefined;
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
      <Stack.Screen
        name="OperatorProductNavigator"
        component={OperatorProductNavigator}
      />
    </Stack.Navigator>
  );
};
