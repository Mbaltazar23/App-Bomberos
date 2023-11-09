import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminProductUpdateScreen } from "../views/admin/products/update/ProductUpdate";
import { AdminProductCreateScreen } from "../views/admin/products/create/ProductCreate";
import { Image, TouchableOpacity } from "react-native";
import { AdminProductListScreen } from "../views/admin/products/list/ProductList";
import { ProductProvider } from "../context/ProductContext";
import { Product } from "../../Domain/entities/Product";

export type AdminProductStackParamList = {
  AdminProductListScreen: undefined;
  AdminProductCreateScreen: undefined;
  AdminProductUpdateScreen: { product: Product };
};

const Stack = createNativeStackNavigator<AdminProductStackParamList>();

export const AdminProductNavigator = () => {
  return (
    <ProductState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AdminProductListScreen"
          component={AdminProductListScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: "Productos",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AdminProductCreateScreen")}
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
          name="AdminProductCreateScreen"
          component={AdminProductCreateScreen}
          options={{
            headerShown: true,
            title: "Nuevo Producto",
          }}
        />
        <Stack.Screen
          name="AdminProductUpdateScreen"
          component={AdminProductUpdateScreen}
          options={{
            headerShown: true,
            title: "Editar Producto",
          }}
        />
      </Stack.Navigator>
    </ProductState>
  );
};

const ProductState = ({ children }: any) => {
  return <ProductProvider>{children}</ProductProvider>;
};
