import React from "react";
import { FlatList, Image, ListRenderItem, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { colors, radius, spacing, typography } from "../../constants/theme";

export type CategoryProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  size: (string | number)[];
};

type CategoryGridScreenProps = {
  title: string;
  products: CategoryProduct[];
  detailRoute:
    | "/productCategories/Mens"
    | "/productCategories/Womens"
    | "/productCategories/Kids"
    | "/productCategories/Shoes"
    | "/productCategories/Access"
    | "/productCategories/Bags"
    | "/productCategories/Watches"
    | "/productCategories/Sports"
    | "/productCategories/Formal";
};

export default function CategoryGridScreen({ title, products, detailRoute }: CategoryGridScreenProps) {
  const router = useRouter();

  const renderItem: ListRenderItem<CategoryProduct> = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: detailRoute,
          params: { item: JSON.stringify(item), category: title },
        })
      }
    >
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.meta}>
        <Text style={styles.price}>{item.price}</Text>
        {"  "}
        <Text style={styles.rating}>{"\u2605"} {item.rating}</Text>
      </Text>
      <View style={styles.viewBtn}>
        <Text style={styles.viewBtnText}>View</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View style={styles.headerWrap}>
            <View style={styles.header}>
              <Pressable onPress={() => router.push("/tabs/Home")} style={styles.iconButton}>
                <Ionicons name="arrow-back" size={20} color={colors.textPrimary} />
              </Pressable>
              <Text style={styles.title}>{title}</Text>
              <Pressable style={styles.iconButton}>
                <Ionicons name="heart-outline" size={20} color={colors.textPrimary} />
              </Pressable>
            </View>
            <Text style={styles.subtitle}>Curated picks for your style</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },
  headerWrap: {
    marginBottom: spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.xs,
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
  title: {
    fontSize: typography.h3,
    color: colors.textPrimary,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: spacing.sm,
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  card: {
    flex: 1,
    margin: spacing.xs,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.sm,
    gap: spacing.xs,
  },
  image: {
    height: 170,
    width: "100%",
    resizeMode: "cover",
    borderRadius: radius.sm,
    backgroundColor: "#EFEAE3",
  },
  name: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  meta: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  price: {
    color: colors.textPrimary,
    fontWeight: "700",
  },
  rating: {
    color: colors.accent,
    fontWeight: "600",
  },
  viewBtn: {
    marginTop: spacing.xs,
    borderRadius: radius.round,
    backgroundColor: colors.textPrimary,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  viewBtnText: {
    color: colors.surface,
    fontWeight: "700",
    fontSize: typography.caption,
  },
});
