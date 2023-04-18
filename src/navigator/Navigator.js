import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, CreateAccount, SignIn } from "../screens";

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({ initialRoute = "WelcomeScreen" }) => {
  return (
    <Stack.Navigator initialRoutteName={initialRoute}>
      <Stack.Screen
        name="WelcomeScreen"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
