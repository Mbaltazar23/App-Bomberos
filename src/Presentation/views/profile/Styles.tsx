import { StyleSheet } from "react-native";

const ProfileInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    marginVertical: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userDataContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  userDataText: {
    fontSize: 18,
    marginBottom: 10,
  },
  logoutButtonContainer: {
    position: "absolute",
    top: 30,
    right: 20,
    width:'40%'
  },
});

export default ProfileInfoStyles;
