import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FireFighterResponsibilityParamList } from '../../../../../navigator/FireFighterResponsibilityNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Responsibility } from '../../../../../../Domain/entities/Responsibility';
import { DateFormater } from '../../../../../utils/DateFormater';
import { User } from '../../../../../../Domain/entities/User';

interface Props {
    responsibility: Responsibility;
    operators: User[]
    navigation: StackNavigationProp<
        FireFighterResponsibilityParamList,
        "FireFighterResponsibilityListScreen",
        undefined
    >;
}

export const FireFighterResponsibilityListItem = ({ navigation, operators, responsibility }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => { }
            }>
            <View style={styles.container}>
                <View style={styles.movementInfoContainer}>
                    <Text style={styles.order}>Responsable # {responsibility.id!}</Text>
                    <Text style={styles.info}>
                        <Text style={styles.label}>Supervisor :</Text> {responsibility.supervisor[0]?.name}
                    </Text>
                    <Text style={styles.info}>
                        <Text style={styles.label}>Desde : </Text>
                        {DateFormater(responsibility.date_time!)}
                    </Text>
                </View>
            </View>
            <View style={styles.divider}></View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 10,
    },
    movementInfoContainer: {
        flex: 1,
    },
    order: {
        fontWeight: "bold",
        color: "black",
        fontSize: 18,
        marginBottom: 8, // Ajusta este valor para bajar o subir el campo "Camion #"
        elevation: 10,
    },
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: "#e2e2e2",
        marginTop: 10,
    },
    info: {
        fontSize: 13,
        marginBottom: 2,
    },
    label: {
        fontWeight: "bold",
    },
    actionImage: {
        width: 30,
        height: 30,
        marginLeft: 30,
    },
});