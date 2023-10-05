import React, { useEffect } from 'react'
import { ActivityIndicator, ScrollView, ToastAndroid, View, Image } from 'react-native'
import { FireFighterNoteParamList } from '../../../../../navigator/FireFighterNotesNavigator';
import { MyStyles, MyColors } from '../../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { CustomTextInput } from '../../../../../components/CustomTextInput';
import { RoundedButton } from '../../../../../components/RoundedButton';
import { DateFormater } from '../../../../../utils/DateFormater';
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
  extends StackScreenProps<
    FireFighterNoteParamList,
    "FireFighterUpdateNoteScreen"
  > { }

export const FireFighterUpdateNoteScreen = ({ navigation, route }: Props) => {
  const  {note} = route.params
  const { user_name, username, content, date_time, loading, updateNote, onChange, responseMessage } = useViewModel(note)
  
  
  const handleUpdateNote = async () => {
    const isSuccess = await updateNote()
    if (isSuccess) {
      navigation.replace("FireFighterNoteListScreen")
    }
  }

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <View style={styles.categoryInfo}>
        <Image
          source={require("../../../../../../../assets/note.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.form}>
        <ScrollView>
          <CustomTextInput
            placeholder="Nombre del usuario"
            keyboardType="default"
            editable={false}
            image={require("../../../../../../../assets/user_menu.png")}
            property="username"
            onChangeText={onChange}
            value={username}
          />
          <CustomTextInput
            placeholder="Correo u nombre del usuario"
            keyboardType="default"
            editable={false}
            image={require("../../../../../../../assets/email.png")}
            property="user_name"
            onChangeText={onChange}
            value={user_name}
          />
          <CustomTextInput
            placeholder="Fecha de la asignacion"
            keyboardType="default"
            editable={false}
            image={require("../../../../../../../assets/icono_calendar.png")}
            property="date_time"
            onChangeText={onChange}
            value={`${DateFormater(date_time)}`}
          />
          <CustomTextInput
            placeholder="Contenido de la Nota"
            keyboardType="default"
            image={require("../../../../../../../assets/icono_write.png")}
            property="content"
            onChangeText={onChange}
            value={content}
          />
          <View style={styles.buttonContainer}>
            <RoundedButton
              text="ACTUALIZAR NOTA"
              onPress={() => handleUpdateNote()}
            />
          </View>
        </ScrollView>
      </View>
      {loading && (
        <ActivityIndicator
          style={MyStyles.loading}
          size="large"
          color={MyColors.primary}
        />
      )}
    </View>
  )
}
