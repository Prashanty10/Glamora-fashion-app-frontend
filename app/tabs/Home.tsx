import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Offer from "../components/Offer";
import { colors, radius, spacing, typography } from "../../constants/theme";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername) setUsername(storedUsername);
    };
    fetchUsername();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Product
        headerComponent={
          <View>
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <Ionicons name="person-circle" size={wp("10%")} color={colors.textPrimary} />
            <Text style={styles.username}>{username || "User"}</Text>
          </View>
          <Pressable style={styles.iconButton}>
            <Ionicons name="bag-outline" size={wp("6%")} color={colors.textPrimary} />
          </Pressable>
        </View>

        <View style={styles.search}>
          <Ionicons
            name="search"
            size={wp("6%")}
            color={colors.textSecondary}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for shirts, shoes, accessories"
            style={styles.searchInput}
            placeholderTextColor={colors.textSecondary}
          />
        </View>
            <Offer />
            <Categories />
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
  header: {
    marginTop: spacing.md,
    marginBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  username: {
    fontSize: typography.h3,
    color: colors.textPrimary,
    fontWeight: "600",
  },
  iconButton: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.round,
    height: 44,
    width: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: radius.round,
    borderColor: colors.border,
    minHeight: 48,
    marginHorizontal: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
  },
  searchIcon: {
    marginRight: spacing.xs,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.body,
    color: colors.textPrimary,
  },
});
