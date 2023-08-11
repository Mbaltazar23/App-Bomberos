import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

interface Props {
  image: any;
  placeholder: string;
  value: Date | any;
  property: string;
  editable?: boolean;
  onDateChange: (property: string, date: Date | null) => void;
}

export const CustomDateInput = ({
  image,
  placeholder,
  value,
  property,
  editable = true,
  onDateChange,
}: Props) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (event: Event, selectedDate: Date | undefined) => {
    hideDatePicker();
    if (selectedDate) {
      onDateChange(property, selectedDate);
    }
  };

  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TouchableOpacity
        style={styles.formTextInput}
        onPress={editable ? showDatePicker : undefined}
        disabled={!editable}
      >
        <TextInput
          placeholder={placeholder}
          value={value ? moment(value).format("DD/MM/YYYY HH:mm") : ""}
          editable={false}
        />
      </TouchableOpacity>
      {isDatePickerVisible && Platform.OS === "ios" && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="datetime"
          minimumDate={new Date()}
          onChange={handleDateConfirm}
        />
      )}
      {isDatePickerVisible && Platform.OS === "android" && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          minimumDate={new Date()}
          is24Hour
          display="default"
          onChange={handleDateConfirm}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
});

