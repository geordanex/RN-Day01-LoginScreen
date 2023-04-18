import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "./src/constants";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigator/Navigator";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={COLORS.background}
      />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
