import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { FireFighterStackParamList } from "../../../navigator/FireFighterStackNavigator";
import { RoundedButton } from "../../../components/RoundedButton";
import styles from "./Styles";

interface Props
  extends StackScreenProps<FireFighterStackParamList, "FireFighterInitScreen"> { }

export const FireFighterInitScreen = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Panel del Bombero</Text>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="PRE"
          onPress={() => navigation.navigate("FireFighterPreNavigator")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="DURANTE"
          onPress={() => navigation.navigate("FireFighterDuringNavigator")}
        />
      </View>

      <View style={styles.buttonGroup}>
        <RoundedButton
          text="POS"
          onPress={() => navigation.navigate("FireFighterPosNavigator")}
        />
      </View>
    </View>
  );
}
