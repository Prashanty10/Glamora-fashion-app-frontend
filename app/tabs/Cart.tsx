import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius, spacing, typography } from "../../constants/theme";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

const cart: Product[] = [
  {
    id: "1",
    name: "Nike Air Max",
    price: 120.0,
    quantity: 2,
    size: "M",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fa167834-731f-47d5-bdc3-8578415c02df/custom-nike-air-max-97-shoes-by-you.png",
  },
  {
    id: "2",
    name: "Adidas Hoodie",
    price: 60.0,
    quantity: 1,
    size: "L",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/59460fb0bd584daa88fe9a383d088a9b_9366/Z.N.E._Hoodie_White_JF2454_21_model.jpg",
  },
  {
    id: "3",
    name: "Ray-Ban Sunglasses",
    price: 150.0,
    quantity: 1,
    size: "Standard",
    image:
      "https://himalayaoptical.com/cdn/shop/products/805289304456_1_1024x.jpg?v=1713765412",
  },
  {
    id: "4",
    name: "Levi's Jeans",
    price: 80.0,
    quantity: 1,
    size: "32",
    image:
      "https://levi.in/cdn/shop/files/182981492_02_Front_b9b774f4-b6a2-4d14-9c7a-9cdf57b6877f.jpg?v=1740488438",
  },
  {
    id: "5",
    name: "Puma Sneakers",
    price: 100.0,
    quantity: 1,
    size: "9",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/IND/fmt/png/Suede-Classic-XXI-Sneakers",
  },
];

export default function Cart() {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.size}>Size: {item.size}</Text>
        <Text style={styles.quantity}>Qty: {item.quantity}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <Pressable hitSlop={8}>
        <Ionicons name="trash-outline" size={22} color={colors.danger} />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.checkoutBar}>
        <View>
          <Text style={styles.subtotalLabel}>Subtotal</Text>
          <Text style={styles.subtotal}>${subtotal.toFixed(2)}</Text>
        </View>
        <Pressable style={({ pressed }) => [styles.checkoutButton, pressed && styles.pressed]}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: "center",
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
  },
  headerText: {
    fontSize: typography.h2,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  list: {
    paddingHorizontal: spacing.md,
    paddingBottom: 120,
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
    padding: spacing.sm,
    borderColor: colors.border,
    borderWidth: 1,
    alignItems: "center",
    gap: spacing.sm,
  },
  image: {
    width: wp("24%"),
    height: hp("12%"),
    borderRadius: radius.sm,
    resizeMode: "cover",
    backgroundColor: "#F0ECE5",
  },
  details: {
    flex: 1,
    justifyContent: "space-around",
    gap: spacing.xxs,
  },
  name: {
    fontSize: typography.body,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  size: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  quantity: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  price: {
    fontSize: typography.body,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  checkoutBar: {
    position: "absolute",
    left: spacing.md,
    right: spacing.md,
    bottom: spacing.md,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtotalLabel: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  subtotal: {
    fontSize: typography.h3,
    color: colors.textPrimary,
    fontWeight: "700",
  },
  checkoutButton: {
    backgroundColor: colors.textPrimary,
    borderRadius: radius.round,
    paddingHorizontal: spacing.lg,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutText: {
    color: colors.surface,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.85,
  },
});
