import React from "react";
import { View, Text } from "react-native";
//import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, CreateAccount, SignIn } from "../screens";

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({ initialRoute = "WelcomeScreen" }) => {
  return (
    <Stack.Navigator initialRoutteName={initialRoute} headerMode="none">
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccount} />
      <Stack.Screen name="SignInScreen" component={SignIn} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
