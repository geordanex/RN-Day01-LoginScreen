import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import WelcomeSVG from "../../assets/images/Welcome.svg";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <View style={styles.imageContent}>
          <Text style={styles.text}>Welcome</Text>
          <WelcomeSVG width={350} height={250} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>Discover Amazing things!</Text>

        {/* Buttons */}
        <Button
          label={"Create Account"}
          isPrimary={true}
          handleOnPress={() => navigation.navigate("CreateAccountScreen")}
        />
        <Button
          label={"Sign In"}
          isPrimary={false}
          handleOnPress={() => navigation.navigate("SignInScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.base * 2,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.ligthGray,
    padding: SIZES.base,
    borderRadius: SIZES.radius,
  },
  imageContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: SIZES.base * 4,
  },
  content: {
    alignItems: "center",
    paddingVertical: SIZES.base * 2,
  },
  contentText: {
    fontSize: 22,
    marginVertical: SIZES.base * 4,
  },
});

export default Welcome;
