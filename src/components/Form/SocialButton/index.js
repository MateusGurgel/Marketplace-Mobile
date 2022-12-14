import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import theme from "../../../global/style/theme";

const SocialButton = ({ name, title, btnColor, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <FontAwesome5 name={name} size={Responsive.font(24)} color="#000" />
      <Text> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backGroundColor: theme.colors.primary,
    padding: Responsive.font(8),
    borderRadius: Responsive.font(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: Responsive.font(16),
  },
  title: {
    fontWeight: "bold",
    fontSize: Responsive.font(16),
    color: "#fff",
  },
});

export { SocialButton };
