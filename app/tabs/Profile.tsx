import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors, radius, spacing, typography } from "../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const profileMenu: {
  id: string;
  name: string;
  icon: IconName;
  showArrow: boolean;
  arrowIcon?: IconName;
}[] = [
  { id: "1", name: "My Profile", icon: "person-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "2", name: "My Address", icon: "location-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "3", name: "My Orders", icon: "cart-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "4", name: "Settings", icon: "settings-outline", showArrow: true, arrowIcon: "chevron-forward" },
  { id: "5", name: "Logout", icon: "log-out-outline", showArrow: false },
];

export type IconName = keyof typeof Ionicons.glyphMap;

export default function Profile() {
  const [username, setUsername] = useState("User");
  const [email, setEmail] = useState("user@glamora.com");
  const avatarUri = useMemo(
    () => `https://picsum.photos/seed/profile-${Math.floor(Math.random() * 10000)}/320/320`,
    []
  );

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      const storedEmail = await AsyncStorage.getItem("email");

      if (storedUsername) setUsername(storedUsername);
      if (storedEmail) setEmail(storedEmail);
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.header}>Profile</Text>
        <Image
          style={styles.image}
          source={{
            uri: avatarUri,
          }}
        />
        <Text style={styles.greeting}>Hello, {username}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <Pressable style={styles.menu}>
        {profileMenu.map((item) => (
          <View key={item.id} style={styles.list}>
            <Ionicons name={item.icon} size={wp("5%")} color={colors.textPrimary} />
            <Text style={styles.itemText}>{item.name}</Text>
            {item.showArrow && item.arrowIcon && (
              <Ionicons name={item.arrowIcon} size={wp("5%")} color={colors.textSecondary} />
            )}
          </View>
        ))}
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  user: {
    alignItems: "center",
    gap: spacing.xs,
  },
  header: {
    marginTop: spacing.md,
    fontSize: typography.h2,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  image: {
    marginTop: spacing.md,
    height: hp("16%"),
    width: wp("32%"),
    borderRadius: radius.round,
    borderWidth: 2,
    borderColor: colors.surface,
  },
  greeting: {
    fontSize: typography.h3,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  email: {
    fontSize: typography.caption,
    color: colors.textSecondary,
  },
  menu: {
    marginTop: spacing.lg,
    marginHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderColor: colors.border,
    borderWidth: 1,
    paddingVertical: spacing.sm,
  },

  list: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  itemText: {
    flex: 1,
    fontSize: typography.body,
    color: colors.textPrimary,
    fontWeight: "500",
  },
});
