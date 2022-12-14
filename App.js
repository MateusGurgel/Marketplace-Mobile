import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { AppRoutes } from "./src/routes/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
