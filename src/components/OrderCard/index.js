import React from "react";
import Responsive from "react-native-lightweight-responsive";
import { View, StyleSheet, Text } from "react-native";
import theme from "../../global/style/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

const OrderCard = ({ productId, sellDate, sellerName, productValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Pedido {productId} | Data:{sellDate}
      </Text>
      <Text style={styles.text}>Vendedor: {sellerName} </Text>
      <Text style={styles.text}>Valor: R$ {productValue} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  text: {
    fontSize: Responsive.font(13),
    fontWeight: "300",
    color: theme.colors.title,
  },
});

export { OrderCard };
