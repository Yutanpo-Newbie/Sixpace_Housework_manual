import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const Button = ({ label, variant = "primary", onPress }) => {
  const baseStyles =
    "px-16 py-3.5 w-full whitespace-nowrap max-w-[370px] rounded-[50px]";
  const variantStyles = {
    primary: "bg-black",
    secondary: "bg-white border border-black border-solid",
  };
  const textStyles = variant === "primary" ? "text-white" : "text-black";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${baseStyles} ${variantStyles[variant]} mt-5`}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Text className={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};
