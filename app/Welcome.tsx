import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { colors, spacing, typography } from "../constants/theme";

export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/User/Login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <LinearGradient
      colors={["#111111", "#1A1816"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>GLAMORA</Text>
        <Text style={styles.subtitle}>Luxury wardrobe, curated for modern style.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
  content: {
    alignItems: "center",
    gap: spacing.sm,
  },
  title: {
    color: colors.surface,
    fontSize: 42,
    fontWeight: "700",
    letterSpacing: 6,
  },
  subtitle: {
    color: "#D2CAC1",
    fontSize: typography.body,
    textAlign: "center",
    lineHeight: 22,
  },
});
