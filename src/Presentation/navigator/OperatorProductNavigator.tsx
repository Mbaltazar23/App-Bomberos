import React from 'react'
import { OperatorMovementProductListScreen } from '../views/operator/movements/products/ProductList';
import { OperatorMovementCreateScreen } from '../views/operator/movements/create/MovementCreate';
import { OperatorMovementUpdateScreen } from '../views/operator/movements/update/MovementUpdate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image } from 'react-native';
import { MovementProvider } from '../context/MovementContext';
import { Movement } from '../../Domain/entities/Movement';
import { Product } from '../../Domain/entities/Product';
import { Truck } from '../../Domain/entities/Truck';

export type OperatorProductStackParamList = {
    OperatorMovementProductListScreen: undefined;
    OperatorMovementCreateScreen: undefined;
    OperatorMovementUpdateScreen: {
        movement: Movement;
        trucks: Truck[];
        products: Product[];
    };
};

const Stack = createNativeStackNavigator<OperatorProductStackParamList>();

export const OperatorProductNavigator = () => {
    return (
        <MovementState>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="OperatorMovementProductListScreen"
            component={OperatorMovementProductListScreen}
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