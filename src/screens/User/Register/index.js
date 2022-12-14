import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyButton } from "../../../components/Form/MyButton";
import { MyInput } from "../../../components/Form/MyInput";
import theme from "../../../global/style/theme";

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Preencha seus dados</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.inputTitle}>Nome</Text>
        <MyInput />

        <Text style={styles.inputTitle}>Rua</Text>
        <MyInput />

        <View style={styles.social}>
          <View style={styles.row}>
            <Text style={styles.inputTitle}>Número</Text>
            <MyInput />
          </View>

          <View style={styles.row}>
            <Text style={styles.inputTitle}>Bairro</Text>
            <MyInput />
          </View>
        </View>

        <Text style={styles.inputTitle}>Email</Text>
        <MyInput />

        <Text style={styles.inputTitle}>Senha</Text>
        <MyInput />

        <MyButton title="Salvar" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    align: "left",
  },
  title: {
    fontSize: Responsive.font(26),
    color: theme.colors.title,
    fontWeight: "bold",
  },
  inputTitle: {
    fontSize: Responsive.font(14),
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    justifyContent: "center",
    padding: Responsive.font(24),
  },
  input: {
    width: "100%",
    borderBottomWidth: Responsive.font(1),
    paddingVertical: Responsive.font(2),
    fontSize: Responsive.font(13),
    borderColor: theme.colors.subtitle,
    marginBottom: Responsive.font(16),
  },
  subTitle: {
    fontSize: Responsive.font(14),
    color: theme.colors.subtitle,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export { Register as Register };
