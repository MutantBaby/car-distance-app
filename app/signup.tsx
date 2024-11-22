import { Image, StyleSheet, Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";

export default function SignInScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/signup_img.svg")}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Sign Up
        </ThemedText>

        <ThemedTextInput
          darkColor="#333"
          placeholder="Name"
          lightColor="#fff"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <ThemedTextInput
          darkColor="#333"
          placeholder="Email"
          lightColor="#fff"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <ThemedTextInput
          secureTextEntry
          darkColor="#333"
          lightColor="#fff"
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
    color: "white",
  },
  reactLogo: {
    left: 0,
    bottom: 0,
    width: 300,
    height: 320,
    position: "absolute",
  },
});
