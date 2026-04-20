import React, { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { colors, radius, spacing, typography } from "../../constants/theme";

type ProductParams = {
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  size: (string | number)[];
};

type CategoryProductDetailsScreenProps = {
  backRoute:
    | "/Categoriesdetail/Menscloth"
    | "/Categoriesdetail/Womencloth"
    | "/Categoriesdetail/Kidcloth"
    | "/Categoriesdetail/Shoes"
    | "/Categoriesdetail/Accessories"
    | "/Categoriesdetail/Bags"
    | "/Categoriesdetail/Watch"
    | "/Categoriesdetail/Sport"
    | "/Categoriesdetail/Formal";
};

export default function CategoryProductDetailsScreen({ backRoute }: CategoryProductDetailsScreenProps) {
  const { item, category } = useLocalSearchParams();
  const router = useRouter();
  const product = useMemo(() => JSON.parse(item as string) as ProductParams, [item]);
  const [selectedSize, setSelectedSize] = useState<string | number | null>(product?.size?.[0] ?? null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.push(backRoute)} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={20} color={colors.textPrimary} />
          </Pressable>
          <Text style={styles.headerTitle}>{category ? `${category} Details` : "Product Details"}</Text>
          <Pressable style={styles.iconButton}>
            <Ionicons name="heart-outline" size={20} color={colors.textPrimary} />
          </Pressable>
        </View>

        <Image style={styles.image} source={{ uri: product.image }} />

        <View style={styles.card}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.rating}>{"\u2605"} {product.rating} (25 reviews)</Text>
          <Text style={styles.sectionLabel}>Select Size</Text>
          <View style={styles.sizeRow}>
            {product.size.map((size) => (
              <Pressable
                key={String(size)}
                onPress={() => setSelectedSize(size)}
                style={[styles.sizeChip, selectedSize === size && styles.sizeChipActive]}
              >
                <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextActive]}>{String(size)}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Buy Now</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Add to Cart</Text>
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
  content: {
    padding: spacing.md,
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    height: 40,
    width: 40,
    borderRadius: radius.round,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: typography.h3,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  image: {
    width: "100%",
    height: 360,
    borderRadius: radius.lg,
    resizeMode: "cover",
    backgroundColor: "#EFEAE3",
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.xs,
  },
  name: {
    fontSize: typography.h2,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  price: {
    fontSize: typography.h3,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  rating: {
    fontSize: typography.caption,
    color: colors.accent,
    fontWeight: "600",
  },
  sectionLabel: {
    marginTop: spacing.sm,
    fontSize: typography.caption,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  sizeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  sizeChip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.round,
    minWidth: 44,
    minHeight: 36,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.surface,
  },
  sizeChipActive: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textPrimary,
  },
  sizeText: {
    color: colors.textPrimary,
    fontWeight: "600",
  },
  sizeTextActive: {
    color: colors.surface,
  },
  sectionTitle: {
    fontSize: typography.h3,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  description: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 22,
  },
  actions: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  primaryButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: radius.round,
    backgroundColor: colors.textPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButtonText: {
    color: colors.surface,
    fontWeight: "700",
  },
  secondaryButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: radius.round,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: "#D8C9B0",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: colors.textPrimary,
    fontWeight: "700",
  },
});
