import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/theme";

export default function RootLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false,
        title: "",
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 8,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          backgroundColor: colors.surface,
        },
        tabBarActiveTintColor: colors.textPrimary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-handle-outline" size={24} color={color} />
          )
        }}
      />


      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}