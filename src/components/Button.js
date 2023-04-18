import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const Button = ({ label, isPrimary, style, handleOnPress }) => {
  const bgColor = isPrimary ? COLORS.primary : COLORS.white;
  const borderColor = isPrimary ? COLORS.primary : COLORS.black;
  const color = isPrimary ? COLORS.white : COLORS.black;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor: bgColor, borderColor: borderColor },
        style,
      ]}
      onPress={handleOnPress}
    >
      <Text style={[styles.text, { color: color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SIZES.base,
    borderRadius: 5,
    width: "100%",
    marginVertical: SIZES.base,
    borderWidth: 1.5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
