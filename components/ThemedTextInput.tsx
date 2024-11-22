import { TextInput, type TextInputProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextInputProps = TextInputProps & {
  darkColor?: string;
  lightColor?: string;
};

export function ThemedTextInput({
  style,
  darkColor,
  lightColor,
  ...otherProps
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <TextInput
      {...otherProps}
      style={[{ backgroundColor, color: textColor }, style, styles.input]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});
