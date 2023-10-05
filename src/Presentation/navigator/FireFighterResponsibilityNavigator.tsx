import React from 'react'
import { FireFighterResponsibilityUpdateScreen } from '../views/firefighter/pos/responsibility/update/ResponsibilityUpdate'
import { FireFighterResponsibilityListScreen } from '../views/firefighter/pos/responsibility/list/ResponsibilityList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ResponsibilityProvider } from '../context/ResponsibilityContext'
import { Responsibility } from '../../Domain/entities/Responsibility'
import { User } from '../../Domain/entities/User'

export type FireFighterResponsibilityParamList = {
  FireFighterResponsibilityListScreen: undefined
  FireFighterResponsibilityUpdateScreen: { responsibilty: Responsibility, operators: User[] }
}

const Stack = createNativeStackNavigator<FireFighterResponsibilityParamList>();

export const FireFighterResponsibilityNavigator = () => {
  return (
    <ResponsibilityState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="FireFighterResponsibilityListScreen"
          component={FireFighterResponsibilityListScreen}
          options={{
            headerShown: true,
            title: "Responsables Designados",
          }}
        />
        <Stack.Screen
          name="FireFighterResponsibilityUpdateScreen"
          component={FireFighterResponsibilityUpdateScreen}
          options={{
            headerShown: true,
            title: "Editar Responsable",
          }}
        />
      </Stack.Navigator>
    </ResponsibilityState>

  )
}

const ResponsibilityState = ({ children }: any) => {
  return <ResponsibilityProvider>{children}</ResponsibilityProvider>
}
