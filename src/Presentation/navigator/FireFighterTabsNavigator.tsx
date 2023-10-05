import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FireFighterStackNavigator } from './FireFighterStackNavigator';
import { ProfileScreen } from "../views/profile/Profile";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export const FireFighterTabsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="FireFighterStackNavigator"
                component={FireFighterStackNavigator}
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

}
