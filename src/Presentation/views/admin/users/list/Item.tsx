import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { AdminUserStackParamList } from "../../../../navigator/AdminUserNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { User } from "../../../../../Domain/entities/User";

interface Props {
  user: User;
  remove: (user: User) => void;
}

export const AdminUserListItem = ({ user, remove }: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<AdminUserStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AdminUserUpdateScreen", { user: user })
      }
    >
      <View style={styles.container}>
        {user.roles[0]?.name === "Administrador" ? (
          <Image
            source={require("../../../../../../assets/icon_admin.png")}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../../../../../../assets/icon_operator.png")}
            style={styles.image}
          />
        )}
        <View style={styles.info}>
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.description}>
            Correo/Nombre de usuario : {user.username}
          </Text>
          <Text style={styles.price}>Perfil: {user.roles[0]?.name}</Text>

        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={() => remove(user)}>
            <Image
              style={styles.actionImage}
              source={require("../../../../../../assets/trash.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 90,
    marginHorizontal: 20,
    marginTop: 10,
    paddingTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 15,
  },
  description: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 3,
  },
  price: {
    color: "green",
    fontSize: 12,
    fontWeight: "bold",
  },
  actionContainer: {
    marginRight: 40,
  },
  actionImage: {
    width: 40,
    height: 40,
    marginVertical: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#f2f2f2",
    marginHorizontal: 30,
    flex: 1,
  },
});
