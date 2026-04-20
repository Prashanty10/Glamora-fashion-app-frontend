import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerUser, login } from "../../api/auth";
import { colors, radius, spacing, typography } from "../../constants/theme";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleRegister = async () => {
    if (!username.trim() || !email.includes("@") || !password) {
      alert("All fields are required and email must be valid");
      return;
    }

    try {
      await registerUser(username, email, password);
      const loginRes = await login(email, password);
      await AsyncStorage.setItem("token", loginRes.data.token);
      await AsyncStorage.setItem("username", username); 
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.replace("/tabs/Home"); 
    } catch (err: unknown) {
      const e = err as any;
      const serverMsg =
        (e.response && e.response.data && e.response.data.message) ||
        "Register failed";
      setMessage(serverMsg);
    }
  };


  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.keyboardWrap}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join Glamora for curated fashion and quick checkout.</Text>

            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#9A938B"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9A938B"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9A938B"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Pressable onPress={handleRegister} style={({ pressed }) => [styles.buttonContainer, pressed && styles.buttonPressed]}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>

            {message ? <Text style={styles.message}>{message}</Text> : null}
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(16,14,12,0.62)",
    padding: spacing.lg,
  },
  keyboardWrap: {
    flex: 1,
    justifyContent: "center",
  },
  innerContainer: {
    width: "100%",
    gap: spacing.md,
    backgroundColor: "rgba(247,245,242,0.95)",
    padding: spacing.lg,
    borderRadius: radius.lg,
  },
  title: {
    fontSize: typography.h1,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.body,
    marginBottom: spacing.xs,
  },
  input: {
    width: "100%",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderRadius: radius.md,
    color: colors.textPrimary,
    fontSize: typography.body,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  buttonContainer: {
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
    alignItems: "center",
    backgroundColor: colors.textPrimary,
    minHeight: 48,
    justifyContent: "center",
  },
  buttonPressed: { opacity: 0.8 },
  buttonText: {
    color: colors.surface,
    fontSize: typography.h3,
    fontWeight: "600",
  },
  message: {
    color: colors.danger,
    fontSize: typography.caption,
    marginTop: spacing.xs,
    textAlign: "center",
  },
});
