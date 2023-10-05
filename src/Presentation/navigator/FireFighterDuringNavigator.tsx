import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FireFighterDuringScreen } from '../views/firefighter/during/During';
import { NoteProvider } from '../context/NoteContext'

export type FireFighterDuringStackParamList = {
  FireFighterDuringScreen: undefined;
}

const Stack = createNativeStackNavigator<FireFighterDuringStackParamList>();

export const FireFighterDuringNavigator = () => {
  return (
    <NoteState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="FireFighterDuringScreen"
          component={FireFighterDuringScreen}
          options={{
            headerShown: true,
            title: "Nuevo Nota a registrar",
          }}
        />
      </Stack.Navigator>
    </NoteState>
  )
}

const NoteState = ({ children }: any) => {
  return <NoteProvider>{children}</NoteProvider>
}