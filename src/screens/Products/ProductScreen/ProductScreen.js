import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
