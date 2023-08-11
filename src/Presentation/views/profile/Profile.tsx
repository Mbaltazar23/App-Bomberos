import React, { useEffect } from "react";
import { RootStackParamList } from "../../navigator/MainStackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View, Image } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import useViewModel from "./ViewModel";
import styles from "./Styles";

export const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { removeUserSession, user } = useViewModel();

  useEffect(() => {
    if (user.id === "") {
      navigation.replace("HomeScreen");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../../../assets/profile.png")}
          style={styles.profileIcon}
        />
      </View>
      <View style={styles.userDataContainer}>
        <Text style={styles.userDataText}>Nombre: {user.name}</Text>
        <Text style={styles.userDataText}>
          Nombre de usuario: {user.username}
        </Text>
        <Text style={styles.userDataText}>Perfil asignado: {user.roles[0]?.name}</Text>
      </View>
      <View style={styles.logoutButtonContainer}>
        <RoundedButton
          text="Cerrar Sesión"
          onPress={() => removeUserSession()}
        />
      </View>
    </View>
  );
};
