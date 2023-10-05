import React, { useEffect } from 'react'
import { ToastAndroid, View, Image, ActivityIndicator, ScrollView } from "react-native"
import { FireFighterResponsibilityParamList } from '../../../../../navigator/FireFighterResponsibilityNavigator';
import { MyStyles, MyColors } from '../../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { CustomSelectInput } from '../../../../../components/CustomSelectRolInput';
import { CustomTextInput } from '../../../../../components/CustomTextInput';
import { RoundedButton } from '../../../../../components/RoundedButton';
import { DateFormater } from '../../../../../utils/DateFormater';
import useViewModel from "./ViewModel";
import styles from "./Styles";

interface Props
    extends StackScreenProps<
        FireFighterResponsibilityParamList,
        "FireFighterResponsibilityUpdateScreen"
    > { }

export const FireFighterResponsibilityUpdateScreen = ({ navigation, route }: Props) => {
    const { operators, responsibilty } = route.params
    const { user_name, username, rol_user, date_time, supervisor_id, responseMessage, loading, onChange, updateResponsibility } = useViewModel(responsibilty, operators)

    useEffect(() => {
        if (responseMessage !== "") {
            ToastAndroid.show(responseMessage, ToastAndroid.LONG);
        }
    }, [responseMessage]);


    const handleUpdateResponsibility = async () => {
        const isSuccess = await updateResponsibility()
        if (isSuccess) {
            navigation.replace("FireFighterResponsibilityListScreen")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.categoryInfo}>
                <Image
                    source={require("../../../../../../../assets/responsable.png")}
                    style={styles.image}
                />
            </View>

            <View style={styles.form}>
                <ScrollView>
                    <CustomSelectInput
                        placeholder="Seleccione un supervidor a designar"
                        options={operators}
                        image={require("../../../../../../../assets/icon_operator.png")}
                        property="supervisor_id"
                        onSelectChange={onChange}
                        selectedValue={supervisor_id}
                    />
                    <CustomTextInput
                        placeholder="Nombre del usuario"
                        keyboardType="default"
                        image={require("../../../../../../../assets/user_menu.png")}
                        property="username"
                        editable={false}
                        onChangeText={onChange}
                        value={username}
                    />
                    <CustomTextInput
                        placeholder="Correo u nombre del usuario"
                        keyboardType="default"
                        image={require("../../../../../../../assets/email.png")}
                        property="user_name"
                        editable={false}
                        onChangeText={onChange}
                        value={user_name}
                    />

                    <CustomTextInput
                        placeholder="Perfil del usuario"
                        keyboardType="default"
                        image={require("../../../../../../../assets/icono_rol.png")}
                        property="rol_user"
                        editable={false}
                        onChangeText={onChange}
                        value={rol_user}
                    />

                    <CustomTextInput
                        placeholder="Fecha de la asignacion"
                        keyboardType="default"
                        editable={false}
                        image={require("../../../../../../../assets/icono_calendar.png")}
                        property="date_time"
                        onChangeText={onChange}
                        value={`${DateFormater(date_time)}`}
                    />
                    <View style={styles.buttonContainer}>
                        <RoundedButton
                            text="ACTUALIZAR RESPONSABLE"
                            onPress={() => handleUpdateResponsibility()}
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
