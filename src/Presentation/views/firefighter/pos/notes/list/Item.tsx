import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { FireFighterNoteParamList } from '../../../../../navigator/FireFighterNotesNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { DateFormater } from '../../../../../utils/DateFormater';
import { Note } from '../../../../../../Domain/entities/Note';


interface Props {
    note: Note;
    remove: (id: string) => void;
    navigation: StackNavigationProp<
        FireFighterNoteParamList,
        "FireFighterNoteListScreen",
        undefined
    >;
}

export const FireFighterNoteListItem = ({ note, remove, navigation }: Props) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("FireFighterUpdateNoteScreen", {
                    note: note,
                })
            }
        >
            <View style={styles.container}>
                <View style={styles.movementInfoContainer}>
                    <Text style={styles.order}>Nota # {note.id!}</Text>
                    <Text style={styles.info}>
                        <Text style={styles.label}>Usuario:</Text> {note.user_name}
                    </Text>
                    <Text style={styles.info}>
                        <Text style={styles.label}>Mensaje:</Text> {note.content}
                    </Text>
                    <Text style={styles.info}>
                        <Text style={styles.label}>Registrado el : </Text>
                        {DateFormater(note.date_time!)}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => remove(note.id!)}>
                    <Image
                        style={styles.actionImage}
                        source={require("../../../../../../../assets/trash.png")}
                    />
                </TouchableOpacity>
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