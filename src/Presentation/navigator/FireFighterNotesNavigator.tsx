import React from 'react'
import { FireFighterUpdateNoteScreen } from '../views/firefighter/pos/notes/update/NoteUpdate'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FireFighterNoteListScreen } from '../views/firefighter/pos/notes/list/NoteList'
import { NoteProvider } from '../context/NoteContext'
import { Note } from '../../Domain/entities/Note'

export type FireFighterNoteParamList = {
  FireFighterNoteListScreen: undefined
  FireFighterUpdateNoteScreen: { note: Note }
}

const Stack = createNativeStackNavigator<FireFighterNoteParamList>();

export const FireFighterNotesNavigator = () => {
  return (
    <NoteState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="FireFighterNoteListScreen"
          component={FireFighterNoteListScreen}
          options={{
            headerShown: true,
            title: "Notas Registradas",
          }}
        />
        <Stack.Screen
          name="FireFighterUpdateNoteScreen"
          component={FireFighterUpdateNoteScreen}
          options={{
            headerShown: true,
            title: "Editar Nota",
          }}
        />
      </Stack.Navigator>
    </NoteState>
  )
}

const NoteState = ({ children }: any) => {
  return <NoteProvider>{children}</NoteProvider>
}