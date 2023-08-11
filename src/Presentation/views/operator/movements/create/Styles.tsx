import { StyleSheet } from "react-native";

const OperatorMovementCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    bottom:10
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
  categoryInfo: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textCategory: {
    color: "gray",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10, // Add margin top for spacing
  },
  boldText: {
    fontWeight: "normal", // Eliminamos el estilo de negrita para evitar el subrayado
  },
});

export default OperatorMovementCreateStyles;
