import React from "react";
import Responsive from "react-native-lightweight-responsive";
import { View, TextInput, StyleSheet } from "react-native";
import theme from "../../../global/style/theme";

const MyInput = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: Responsive.font(1),
    paddingVertical: Responsive.font(18),
    fontSize: Responsive.font(13),
    borderColor: theme.colors.subtitle,
    marginBottom: Responsive.font(16),
  },
});

export { MyInput };
