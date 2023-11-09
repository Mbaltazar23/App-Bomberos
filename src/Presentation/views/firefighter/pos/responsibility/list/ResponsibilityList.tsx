import React, { useEffect } from 'react'
import { FlatList, ToastAndroid, View } from "react-native"
import { FireFighterResponsibilityParamList } from '../../../../../navigator/FireFighterResponsibilityNavigator';
import { FireFighterResponsibilityListItem } from './Item';
import { StackNavigationProp } from '@react-navigation/stack';
import { DeleteConfirmation } from '../../../../../components/ConfirmationMessage';
import { useNavigation } from '@react-navigation/native';
import useViewModel from "./ViewModel";

export const FireFighterResponsibilityListScreen = () => {

    const navigation =
        useNavigation<
            StackNavigationProp<
                FireFighterResponsibilityParamList,
                "FireFighterResponsibilityListScreen"
            >
        >();

    const { user, operators, responsibilitys, responseMessage, showDeleteConfirmation, getAllOperators, getResponsibilitysByUser, handleCancelDeleteResponsibility, handleDeleteResponsibility, handleConfirmDeleteResponsibility, } = useViewModel()

    useEffect(() => {
        getAllOperators(user.id!)
        getResponsibilitysByUser(user.id!)
    }, [])


    useEffect(() => {
        if (responseMessage !== "") {
            ToastAndroid.show(responseMessage, ToastAndroid.LONG);
        }
    }, [responseMessage]);


    return (
        <View style={{ backgroundColor: "white" }}>
            <DeleteConfirmation
                type="responsibility"
                onConfirm={handleConfirmDeleteResponsibility}
                onCancel={handleCancelDeleteResponsibility}
                visible={showDeleteConfirmation}
            />

            <FlatList
                data={responsibilitys}
                keyExtractor={(item) => item.id!}
                renderItem={({ item }) => (
                    <FireFighterResponsibilityListItem
                        responsibility={item}
                        operators={operators}
                        //remove={() => handleDeleteResponsibility(item)}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    )
}
