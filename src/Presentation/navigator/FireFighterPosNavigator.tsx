import React from 'react'
import { FireFighterResponsibilityNavigator } from './FireFighterResponsibilityNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FireFighterNotesNavigator } from './FireFighterNotesNavigator';
import { FireFighterPosInitScreen } from '../views/firefighter/pos/init/Init';

export type FireFighterPosStackParamList = {
  FireFighterPosInitScreen: undefined;
  FireFighterResponsibilityNavigator: undefined;
  FireFighterNotesNavigator: undefined;
}

const Stack = createNativeStackNavigator<FireFighterPosStackParamList>();

export const FireFighterPosNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="FireFighterPosInitScreen"
        component={FireFighterPosInitScreen}
        options={{
          headerShown: true,
          title: "Inventario registrado",
        }}
      />
      <Stack.Screen
        name="FireFighterResponsibilityNavigator"
        component={FireFighterResponsibilityNavigator}
      />
      <Stack.Screen
        name="FireFighterNotesNavigator"
        component={FireFighterNotesNavigator}
      />

    </Stack.Navigator>
  )
}
