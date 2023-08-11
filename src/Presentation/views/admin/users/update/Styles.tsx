import { StyleSheet } from "react-native";

const AdminUpdateCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },

  form: {
    backgroundColor: "white",
    height: "80%",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    marginTop: 30,
    bottom: 0,
  },
  buttonContainer: {
    marginTop: 80,
  },
  userInfo: {
    //flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imageUser: {
    width: 50,
    height: 50,
  },
  textUser: {
    //marginLeft: 10,
    color: "gray",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default AdminUpdateCreateStyles;
