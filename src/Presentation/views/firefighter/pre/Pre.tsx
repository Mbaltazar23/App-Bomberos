import React, { useEffect } from 'react'
import { ToastAndroid, View, Image, ScrollView, ActivityIndicator } from 'react-native'
import { StackNavigationProp } from "@react-navigation/stack";
import { FireFighterStackParamList } from '../../../navigator/FireFighterStackNavigator';
import { MyColors, MyStyles } from '../../../theme/AppTheme';
import { CustomSelectInput } from '../../../components/CustomSelectRolInput';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';
import { DateFormater } from '../../../utils/DateFormater';
import useViewModel from "./ViewModel";
import styles from "./Styles";


export const FireFighterPreScreen = () => {

    const navigation = useNavigation<StackNavigationProp<FireFighterStackParamList>>();

    const {
        user_id, user_name, username, date_time, rol_user, supervisor_id, operators, getAllOperators, createResponsibility, loading, onChange, responseMessage } = useViewModel();

    useEffect(() => {
        getAllOperators(user_id);
    }, []);

    useEffect(() => {
        if (responseMessage !== "") {
            ToastAndroid.show(responseMessage, ToastAndroid.LONG);
        }
    }, [responseMessage]);


    const handleCreateResponsibility = async () => {
        const isSuccess = await createResponsibility()
        if (isSuccess) {
            navigation.replace("FireFighterInitScreen")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.categoryInfo}>
                <Image
                    source={require("../../../../../assets/responsable.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.form}>
                <ScrollView>
                    <CustomSelectInput
                        placeholder="Seleccione un supervidor a designar"
                        options={operators}
                        image={require("../../../../../assets/icon_operator.png")}
                        property="supervisor_id"
                        onSelectChange={onChange}
                        selectedValue={supervisor_id}
                    />
                    <CustomTextInput
                        placeholder="Nombre del usuario"
                        keyboardType="default"
                        editable={false}
                        image={require("../../../../../assets/user_menu.png")}
                        property="username"
                        onChangeText={onChange}
                        value={username}
                    />
                    <CustomTextInput
                        placeholder="Correo u nombre del usuario"
                        keyboardType="default"
                        editable={false}
                        image={require("../../../../../assets/email.png")}
                        property="user_name"
                        onChangeText={onChange}
                        value={user_name}
                    />

                    <CustomTextInput
                        placeholder="Perfil del usuario"
                        keyboardType="default"
                        editable={false}
                        image={require("../../../../../assets/icono_rol.png")}
                        property="rol_user"
                        onChangeText={onChange}
                        value={rol_user}
                    />

                    <CustomTextInput
                        placeholder="Fecha de la asignacion"
                        keyboardType="default"
                        editable={false}
                        image={require("../../../../../assets/icono_calendar.png")}
                        property="date_time"
                        onChangeText={onChange}
                        value={`${DateFormater(date_time)}`}
                    />
                    <View style={styles.buttonContainer}>
                        <RoundedButton
                            text="DESIGNAR RESPONSABLE"
                            onPress={() => handleCreateResponsibility()}
                        />
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
    )
}
