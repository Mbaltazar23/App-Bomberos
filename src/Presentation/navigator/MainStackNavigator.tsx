import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FireFighterTabsNavigator } from "./FireFighterTabsNavigator";
import { OperatorTabsNavigator } from "./OperatorTabsNavigator";
import { AdminTabsNavigator } from "./AdminTabsNavigator";
import { ProfileScreen } from "../views/profile/Profile";
import { UserProvider } from "../context/UserContext";
import { HomeScreen } from "../views/home/Home";
import { User } from "../../Domain/entities/User";

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  AdminTabsNavigator: undefined;
  OperatorTabsNavigator: undefined;
  FireFighterTabsNavigator: undefined
  ProfileScreen: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <UserState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen
          name="AdminTabsNavigator"
          component={AdminTabsNavigator}
        />

        <Stack.Screen
          name="OperatorTabsNavigator"
          component={OperatorTabsNavigator}
        />

        <Stack.Screen
          name="FireFighterTabsNavigator"
          component={FireFighterTabsNavigator}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: true,
            title: "Actualizar usuario",
          }}
        />
      </Stack.Navigator>
    </UserState>
  );
};

const UserState = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};
