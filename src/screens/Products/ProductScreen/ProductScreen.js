import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";

export function ProductScreen() {
  const userData = useAuth()

  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
      <Text> {userData.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
