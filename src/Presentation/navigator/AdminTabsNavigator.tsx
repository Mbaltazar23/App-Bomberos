import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdminStackNavigator } from "./AdminStackNavigator";
import { ProfileScreen } from "../views/profile/Profile";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminStackNavigator"
        component={AdminStackNavigator}
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/inicio.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarLabel: "Perfil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/user_menu.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
