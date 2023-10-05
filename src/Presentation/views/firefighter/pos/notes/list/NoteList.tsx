import React, { useEffect } from 'react'
import { FlatList, ToastAndroid, View } from 'react-native';
import { FireFighterNoteParamList } from '../../../../../navigator/FireFighterNotesNavigator';
import { FireFighterNoteListItem } from './Item';
import { StackNavigationProp } from '@react-navigation/stack';
import { DeleteConfirmation } from '../../../../../components/ConfirmationMessage';
import { useNavigation } from '@react-navigation/native';
import useViewModel from "./ViewModel";

export const FireFighterNoteListScreen = () => {

  const navigation =
    useNavigation<
      StackNavigationProp<
        FireFighterNoteParamList,
        "FireFighterNoteListScreen"
      >
    >();

  const { user, notes, responseMessage, showDeleteConfirmation, getAllNotesByUser, handleDeleteNote, handleCancelDeleteNote, handleConfirmDeleteNote } = useViewModel()

  useEffect(() => {
    getAllNotesByUser(user.id!)
  }, []);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <DeleteConfirmation
        type="note"
        onConfirm={handleConfirmDeleteNote}
        onCancel={handleCancelDeleteNote}
        visible={showDeleteConfirmation}
      />

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <FireFighterNoteListItem
            note={item}
            remove={() => handleDeleteNote(item)}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}
