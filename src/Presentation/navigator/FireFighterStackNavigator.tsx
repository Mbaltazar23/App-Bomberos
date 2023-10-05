import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FireFighterDuringNavigator } from './FireFighterDuringNavigator';
import { FireFighterPosNavigator } from './FireFighterPosNavigator';
import { FireFighterPreNavigator } from './FireFighterPreNavigator';
import { FireFighterInitScreen } from '../views/firefighter/init/Init';

export type FireFighterStackParamList = {
  FireFighterInitScreen: undefined;
  FireFighterPreNavigator: undefined;
  FireFighterDuringNavigator: undefined;
  FireFighterPosNavigator: undefined
};

const Stack = createNativeStackNavigator<FireFighterStackParamList>();

export const FireFighterStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="FireFighterInitScreen"
        component={FireFighterInitScreen}
        options={{
          headerShown: true,
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="FireFighterPreNavigator"
        component={FireFighterPreNavigator}
      />
      <Stack.Screen
        name="FireFighterDuringNavigator"
        component={FireFighterDuringNavigator}
      />
      <Stack.Screen
        name="FireFighterPosNavigator"
        component={FireFighterPosNavigator}
      />
    </Stack.Navigator>
  )
}
