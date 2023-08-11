import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface Props {
  image: any;
  options: any[];
  selectedValue: string;
  placeholder: string;
  property: string;
  onSelectChange: (property: string, value: string) => void;
}

export const CustomSelectInput = ({
  image,
  options,
  selectedValue,
  placeholder,
  property,
  onSelectChange,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectChange = (value: string) => {
    onSelectChange(property, value);
    setModalVisible(false);
  };

  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <View style={styles.selectContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => handleSelectChange(itemValue)}
        >
          <Picker.Item label={placeholder} value="" />
          {options.map((option) => (
            <Picker.Item key={option.id} label={option.name} value={option.id} />
          ))}
        </Picker>
    
      </View>
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
    alignItems: "center", // Align items vertically in the center
    marginTop: 30,
  },
  selectContainer: {
    flex: 1,
    height: 40, // Adjust the height as needed
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
});