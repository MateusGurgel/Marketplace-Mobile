import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyButton } from "../../../components/Form/MyButton";
import { MyInput } from "../../../components/Form/MyInput";
import { SocialButton } from "../../../components/Form/SocialButton";
import theme from "../../../global/style/theme";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <View style={styles.form}>
        <Text style={styles.inputTitle}>Email</Text>
        <MyInput placeholder="exemple@email.com" />
        <Text style={styles.inputTitle}>Password</Text>
        <MyInput />
        <MyButton title="Entrar" />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.subTitle}>ou acesse com suas redes sociais</Text>
        </View>
        <View style={styles.social}>
          <SocialButton name="twitter" title="Twitter" btnColor="#000" />
          <SocialButton name="facebook" title="Facebook" btnColor="#000" />
        </View>
        <View style={styles.social}>
          <View style={styles.container}>
            <Text style={styles.subTitle}>Não tem conta</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.inputTitle}>Criar conta</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "space-between",
  },
});

export { Login };
