import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, radius, spacing, typography } from "../../constants/theme";

export default function Productdetails() {
  const { item } = useLocalSearchParams();
  const product = JSON.parse(item as string);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable onPress={() => router.push("/tabs/Home")} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>Product Details</Text>
          <Pressable style={styles.iconButton}>
            <Ionicons name="heart-outline" size={24} color={colors.textPrimary} />
          </Pressable>
        </View>
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={{ uri: product.image }}
          />
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.meta}>{"\u2605"} {product.rating} (25 reviews)</Text>
          <Text style={styles.size}>Size: {product.size}</Text>
        </View>
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.actions}>
          <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
            <Text style={styles.primaryText}>Buy Now</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}>
            <Text style={styles.secondaryText}>Add to Cart</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: typography.h3,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  iconButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xs,
    borderRadius: radius.round,
  },
  imageWrap: {
    alignItems: "center",
    marginTop: spacing.md,
  },
  image: {
    height: hp("36%"),
    width: wp("78%"),
    borderRadius: radius.lg,
    resizeMode: "cover",
    backgroundColor: "#EFEAE3",
  },
  infoCard: {
    marginTop: spacing.md,
    marginHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  name: {
    fontSize: typography.h2,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  meta: {
    fontSize: typography.caption,
    color: colors.accent,
    fontWeight: "600",
  },
  size: {
    fontSize: typography.body,
    color: colors.textSecondary,
  },
  descriptionCard: {
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  descriptionTitle: {
    fontSize: typography.h3,
    fontWeight: "700",
    marginBottom: spacing.xs,
    color: colors.textPrimary,
  },
  description: {
    fontSize: typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: spacing.md,
    marginVertical: spacing.lg,
    gap: spacing.sm,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: colors.textPrimary,
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
    alignItems: "center",
    minHeight: 48,
    justifyContent: "center",
  },
  primaryText: {
    color: colors.surface,
    fontWeight: "700",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: colors.accentSoft,
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D8C9B0",
    minHeight: 48,
    justifyContent: "center",
  },
  secondaryText: {
    color: colors.textPrimary,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.8,
  },
});
