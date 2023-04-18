import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { COLORS, SIZES } from "../constants";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import SignInSignUpSVG from "../../assets/images/SignInOrSignUp.svg";
import Button from "../components/Button";

const CreateAccount = ({ navigation }) => {
  const [activeInput, setActiveInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <AntDesignIcon
        name="arrowleft"
        style={{ fontSize: 30 }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <SignInSignUpSVG width={350} heigh={250} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Create Account</Text>

          <View style={{ marginBottom: SIZES.base }}>
            <Text style={styles.textForm}>Full Name</Text>
            <TextInput
              onFocus={() => setActiveInput("fullname")}
              style={[
                styles.textInput,
                {
                  borderColor:
                    activeInput == "fullname" ? COLORS.primary : COLORS.white,
                },
              ]}
            />
          </View>

          <View style={{ marginBottom: SIZES.base }}>
            <Text style={styles.textForm}>Email Address</Text>
            <TextInput
              onFocus={() => setActiveInput("email")}
              style={[
                styles.textInput,
                {
                  borderColor:
                    activeInput == "email" ? COLORS.primary : COLORS.white,
                },
              ]}
            />
          </View>
          <View style={{ marginBottom: SIZES.base }}>
            <Text style={styles.textForm}>Password</Text>
            <View style={{ position: "relative", justifyContent: "center" }}>
              <TextInput
                onFocus={() => setActiveInput("password")}
                secureTextEntry={showPassword ? false : true}
                style={[
                  styles.textInput,
                  {
                    borderColor:
                      activeInput == "password" ? COLORS.primary : COLORS.white,
                  },
                ]}
              />
              <AntDesignIcon
                name="eye"
                onPress={() => setShowPassword(!showPassword)}
                style={[
                  styles.passwordIcon,
                  { color: showPassword ? COLORS.primary : COLORS.black },
                ]}
              />
            </View>
          </View>

          <Button
            label={"Create Account"}
            isPrimary={true}
            style={{ marginVertical: SIZES.base * 2 }}
          />
          <View style={styles.buttonContainer}>
            <Text style={{ fontSize: 16 }}> Already have an account</Text>
            <Text
              style={styles.signInText}
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
            >
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.base * 2,
    position: "relative",
    marginTop: SIZES.base * 3,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  content: {
    backgroundColor: COLORS.ligthGray,
    width: "100%",
    borderTopStartRadius: SIZES.radius * 2,
    borderTopEndRadius: SIZES.radius * 2,
    padding: SIZES.base * 2,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: SIZES.base * 2,
  },
  textForm: {
    fontSize: 16,
    opacity: 0.5,
    marginBottom: SIZES.base,
  },
  textInput: {
    padding: SIZES.base,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingVertical: SIZES.base * 1.5,
    borderWidth: 1.5,
  },
  passwordIcon: {
    position: "absolute",
    right: SIZES.base * 2,
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.base,
  },
  signInText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: SIZES.base,
    color: COLORS.primary,
  },
});

export default CreateAccount;
