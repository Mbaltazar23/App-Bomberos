import React from 'react'
import { FireFighterPosStackParamList } from '../../../../navigator/FireFighterPosNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { RoundedButton } from '../../../../components/RoundedButton';
import { View, Text } from 'react-native';
import styles from "./Styles";

interface Props
  extends StackScreenProps<FireFighterPosStackParamList, "FireFighterPosInitScreen"> { }

export const FireFighterPosInitScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario registrado</Text>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="NOTAS"
          onPress={() => navigation.navigate("FireFighterNotesNavigator")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="RESPONSABLES"
          onPress={() => navigation.navigate("FireFighterResponsibilityNavigator")}
        />
      </View>
    </View>
  )
}
