import React, { useState } from "react";
import { Image, KeyboardType, StyleSheet, TextInput, View } from "react-native";

interface Props {
  image: any;
  placeholder: string;
  value: string;
  property: string;
  keyboardType: KeyboardType;
  onChangeText: (property: string, value: any) => void;
}

const DNIInput = ({
  image,
  value,
  placeholder,
  keyboardType,
  property,
  onChangeText,
}: Props) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleInputChange = (text: string) => {
    let formattedText = text.replace(/\./g, "").replace("-", "");
    if (formattedText.match(/^(\d{2})(\d{3}){2}(\w{1})$/)) {
      formattedText = formattedText.replace(
        /^(\d{2})(\d{3})(\d{3})(\w{1})$/,
        "$1.$2.$3-$4"
      );
    } else if (formattedText.match(/^(\d)(\d{3}){2}(\w{0,1})$/)) {
      formattedText = formattedText.replace(
        /^(\d)(\d{3})(\d{3})(\w{0,1})$/,
        "$1.$2.$3-$4"
      );
    } else if (formattedText.match(/^(\d)(\d{3})(\d{0,2})$/)) {
      formattedText = formattedText.replace(/^(\d)(\d{3})(\d{0,2})$/, "$1.$2.$3");
    } else if (formattedText.match(/^(\d)(\d{0,2})$/)) {
      formattedText = formattedText.replace(/^(\d)(\d{0,2})$/, "$1.$2");
    }

    setFormattedValue(formattedText);
    onChangeText(property, formattedText);
  };

  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />

      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={formattedValue}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
});

export default DNIInput;
