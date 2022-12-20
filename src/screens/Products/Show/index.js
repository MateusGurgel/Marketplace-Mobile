import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import theme from "../../../global/style/theme";
import { MyButton } from "../../../components/Form/MyButton";

const Show = ({ product_name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <View style={styles.picture}></View>
      </View>
      <Text style={styles.title}>Nome do produto</Text>

      <View style={styles.paragraph}>
        <Text style={styles.price}>R$ 9,90</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.description}>Vendido por: Vendedor TOP</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.description}>
          Entregar no endereço: Exibir o endereço cadastrado na cona do usuario
        </Text>
      </View>

      <MyButton title="Adicionar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    align: "left",
    margin: Responsive.font(18),
  },
  pictureContainer: {
    padding: Responsive.font(6),
    borderWidth: 1,
    borderColor: theme.colors.background,
  },
  picture: {
    height: Responsive.font(200),
    backgroundColor: theme.colors.background,
  },
  title: {
    color: theme.colors.title,
    fontSize: Responsive.font(24),
    fontWeight: "500",
  },
  price: {
    color: theme.colors.title,
    fontSize: Responsive.font(15),
    fontWeight: "600",
  },
  description: {
    color: theme.colors.subtitle,
    fontSize: Responsive.font(12),
    fontWeight: "500",
  },
  paragraph: {
    marginVertical: Responsive.font(16),
  },
});

export { Show };
