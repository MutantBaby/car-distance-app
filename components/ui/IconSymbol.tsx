// This file is a fallback for using MaterialIcons on Android and web.

import React from "react";
import { TextStyle } from "react-native";
import { SymbolWeight } from "expo-symbols";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

const MAPPING = {
  // See here: https://icons.expo.fyi
  "paperplane.outline": { name: "send-outline", lib: "Ionicons" },
  "house.outline": { name: "home-outline", lib: "Ionicons" },
  "house.fill": { name: "home", lib: "MaterialIcons" },
  "paperplane.fill": { name: "send", lib: "MaterialIcons" },
  "chevron.right": { name: "chevron-right", lib: "MaterialIcons" },
  "chevron.left.forwardslash.chevron.right": {
    name: "code",
    lib: "MaterialIcons",
  },
} as Partial<
  Record<
    import("expo-symbols").SymbolViewProps["name"],
    {
      name: React.ComponentProps<
        typeof Ionicons | typeof MaterialIcons
      >["name"];
      lib: "MaterialIcons" | "Ionicons";
    }
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  size?: number;
  name: IconSymbolName;
  weight?: SymbolWeight;
  style?: StyleProp<ViewStyle>;
  color: string | OpaqueColorValue;
}) {
  const mapping = MAPPING[name];

  const lib = mapping!.lib;
  const iconName = mapping!.name;

  if (lib === "Ionicons")
    return (
      <Ionicons
        color={color}
        size={size}
        name={iconName as any}
        style={style as TextStyle}
      />
    );

  if (lib === "MaterialIcons")
    return (
      <MaterialIcons
        color={color}
        size={size}
        name={iconName as any}
        style={style as TextStyle}
      />
    );

  return null;
}
