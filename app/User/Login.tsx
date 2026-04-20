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
import { login } from "../../api/auth";
import { colors, radius, spacing, typography } from "../../constants/theme";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email.includes("@") || !password) {
      alert("Please enter valid email and password");
      return;
    }

    try {
      const res = await login(email, password);
      await AsyncStorage.setItem("token", res.data.token);
      setMessage(res.data.message || "Login successful");
      router.replace("/tabs/Home"); 
    } catch (err: unknown) {
      const e = err as any;
      const serverMsg =
        (e.response && e.response.data && e.response.data.message) || "Login failed";
      setMessage(serverMsg);
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.keyboardWrap}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue shopping premium styles.</Text>

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

            <Pressable style={({ pressed }) => [styles.buttonContainer, pressed && styles.buttonPressed]} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>

            {message ? <Text style={styles.message}>{message}</Text> : null}

            <Pressable onPress={() => router.push("/User/Register")} hitSlop={8}>
              <Text style={styles.registerLink}>New to Glamora? Create Account</Text>
            </Pressable>
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
    justifyContent: "center",
  },
  keyboardWrap: {
    width: "100%",
    justifyContent: "center",
  },
  innerContainer: {
    width: "100%",
    alignSelf: "center",
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
    borderColor: colors.border,
    borderRadius: radius.md,
    color: colors.textPrimary,
    fontSize: typography.body,
    backgroundColor: colors.surface,
  },
  buttonContainer: {
    marginTop: spacing.sm,
    backgroundColor: colors.textPrimary,
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
    minHeight: 48,
    justifyContent: "center",
  },
  buttonPressed: { opacity: 0.8 },
  buttonText: {
    color: colors.surface,
    fontSize: typography.h3,
    fontWeight: "600",
    textAlign: "center",
  },
  message: {
    color: colors.danger,
    fontSize: typography.caption,
    marginTop: spacing.xs,
  },
  registerLink: {
    color: colors.accent,
    fontSize: typography.body,
    marginTop: spacing.xs,
    textAlign: "center",
  },
});