import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { OperatorMovementCreateScreen } from "../views/operator/movements/create/MovementCreate";
import { OperatorMovementUpdateScreen } from "../views/operator/movements/update/MovementUpdate";
import { OperatorMovementListScreen } from "../views/operator/movements/list/MovementList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MovementProvider } from "../context/MovementContext";
import { Movement } from "../../Domain/entities/Movement";
import { Product } from "../../Domain/entities/Product";
import { Truck } from "../../Domain/entities/Truck";

export type OperatorMovementStackParamList = {
  OperatorMovementListScreen: undefined;
  OperatorMovementCreateScreen: undefined;
  OperatorMovementUpdateScreen: {
    movement: Movement;
    trucks: Truck[];
    products: Product[];
  };
};

const Stack = createNativeStackNavigator<OperatorMovementStackParamList>();

export const OperatorMovementNavigator = () => {
  return (
    <MovementState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="OperatorMovementListScreen"
          component={OperatorMovementListScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: "Movimientos realizados",
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("OperatorMovementCreateScreen")
                }
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
          name="OperatorMovementCreateScreen"
          component={OperatorMovementCreateScreen}
          options={{
            headerShown: true,
            title: "Nuevo Movimiento",
          }}
        />
        <Stack.Screen
          name="OperatorMovementUpdateScreen"
          component={OperatorMovementUpdateScreen}
          options={{
            headerShown: true,
            title: "Editar Movimiento",
          }}
        />
      </Stack.Navigator>
    </MovementState>
  );
};

const MovementState = ({ children }: any) => {
  return <MovementProvider>{children}</MovementProvider>;
};
