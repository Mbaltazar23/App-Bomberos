import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  ToastAndroid,
  View,
} from "react-native";
import { MyColors, MyStyles } from "../../../../theme/AppTheme";
import { AdminUserStackParamList } from "../../../../navigator/AdminUserNavigator";
import { CustomSelectInput } from "../../../../components/CustomSelectRolInput";
import { StackScreenProps } from "@react-navigation/stack";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { RoundedButton } from "../../../../components/RoundedButton";
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
  extends StackScreenProps<AdminUserStackParamList, "AdminUserCreateScreen"> {}

export const AdminUserCreateScreen = ({ navigation, route }: Props) => {
  const {
    name,
    username,
    password,
    id_rol,
    onChange,
    loading,
    createUser,
    roles,
    responseMessage,
  } = useViewModel();

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  const handleCreateUser = async() => {
    const isSuccess = await createUser()
    if (isSuccess) {
      navigation.navigate("AdminUserListScreen");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../../../assets/user_menu.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.form}>
        <ScrollView>
          <CustomTextInput
            placeholder="Nombre Completo del Usuario"
            keyboardType="default"
            image={require("../../../../../../assets/profile.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />
          <CustomTextInput
            placeholder="Correo o Apodo del Usuario"
            keyboardType="default"
            image={require("../../../../../../assets/email.png")}
            property="username"
            onChangeText={onChange}
            value={username}
          />

          <CustomSelectInput
            placeholder="Seleccione un Rol para el Usuario"
            options={roles}
            image={require("../../../../../../assets/icon_rol.png")}
            property="id_rol"
            onSelectChange={onChange}
            selectedValue={id_rol}
          />

          <CustomTextInput
            placeholder="Contraseña del Usuario"
            keyboardType="default"
            image={require("../../../../../../assets/password.png")}
            property="password"
            onChangeText={onChange}
            secureTextEntry={true}
            value={password}
          />

          <View style={styles.buttonContainer}>
            <RoundedButton text="CREAR USUARIO" onPress={() => handleCreateUser()} />
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
  );
};
