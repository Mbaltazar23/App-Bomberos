import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResponsibilityProvider } from '../context/ResponsibilityContext'
import { FireFighterPreScreen } from '../views/firefighter/pre/Pre';

export type FireFighterPreStackParamList = {
  FireFighterPreScreen: undefined;
}

const Stack = createNativeStackNavigator<FireFighterPreStackParamList>();

export const FireFighterPreNavigator = () => {
  return (
    <ResponsibilityState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="FireFighterPreScreen"
          component={FireFighterPreScreen}
          options={{
            headerShown: true,
            title: "Nuevo Responsable a asignar",
          }}
        />

      </Stack.Navigator>
    </ResponsibilityState>

  )
}

const ResponsibilityState = ({ children }: any) => {
  return <ResponsibilityProvider>{children}</ResponsibilityProvider>
}