import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../../global/style/theme";

const MyButton = ({ title, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.primary,
    padding: Responsive.font(8),
    borderRadius: Responsive.font(5),
    alignItems: "center",
    marginVertical: Responsive.font(16),
  },
  title: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: Responsive.font(16),
  },
});

export { MyButton };
