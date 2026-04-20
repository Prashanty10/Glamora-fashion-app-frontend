import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import axios from "axios";
import { colors, spacing, typography } from "../constants/theme";

const API_URL = "http://192.168.0.102:5000/api/auth";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        router.replace("/Welcome");
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/verify-token`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.valid) {
          router.replace("/tabs/Home");
        } else {
          await AsyncStorage.clear();
          router.replace("/Welcome");
        }
      } catch {
        await AsyncStorage.clear();
        router.replace("/Welcome");
      }
    };

    checkLogin();
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Glamora</Text>
      <ActivityIndicator size="large" color={colors.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    gap: spacing.md,
  },
  brand: {
    fontSize: typography.h1,
    color: colors.textPrimary,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
