import React, { useEffect } from "react";
import { Text, View, Image, ToastAndroid } from "react-native";
import { RootStackParamList } from "../../navigator/MainStackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { CustomTextInput } from "../../components/CustomTextInput";
import { RoundedButton } from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> { }

export const HomeScreen = ({ navigation, route }: Props) => {
  const { email, password, onChange, errorMessage, user, login } =
    useViewModel();

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined && user?.id !== "") {
      const role = user.roles[0]?.name; // Accede al primer objeto del arreglo "roles" y obtiene el valor de "role"
      if (role === "Administrador") {
        // Verifica si el valor de "role" es "Alumno"
        navigation.replace("AdminTabsNavigator");
      } else if (role === "Bombero") {
        navigation.replace("FireFighterTabsNavigator")
      } else {
        navigation.replace("OperatorTabsNavigator");
      }
    }
  }, [user]);

  return (
    //Column
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../../assets/logo.png")}
        />
        <Text style={styles.logoText}>APP-BOMBERO</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          keyboardType="default"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="INGRESAR" onPress={() => login()} />
        </View>
      </View>
    </View>
  );
};
