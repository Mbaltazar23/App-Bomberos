import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminUserUpdateScreen } from "../views/admin/users/update/UserUpdate";
import { AdminUserCreateScreen } from "../views/admin/users/create/UserCreate";
import { AdminUserListScreen } from "../views/admin/users/list/UserList";
import { User } from "../../Domain/entities/User";
import { UserProvider } from "../context/UserContext";

export type AdminUserStackParamList = {
  AdminUserListScreen: undefined;
  AdminUserCreateScreen: undefined;
  AdminUserUpdateScreen: { user: User };
};
const Stack = createNativeStackNavigator<AdminUserStackParamList>();

export const AdminUserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AdminUserListScreen"
        component={AdminUserListScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          title: "Usuarios",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("AdminUserCreateScreen")}
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
        name="AdminUserCreateScreen"
        component={AdminUserCreateScreen}
        options={{
          headerShown: true,
          title: "Nuevo Usuario",
        }}
      />
      <Stack.Screen
        name="AdminUserUpdateScreen"
        component={AdminUserUpdateScreen}
        options={{
          headerShown: true,
          title: "Editar Usuario",
        }}
      />
    </Stack.Navigator>
  );
};
