import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors, radius, spacing, typography } from "../../constants/theme";

const posterdata = [
  {
    id: "1",
    title: "Special Offer",
    title2: "Get 30% OFF",
    title3: "New Arrival",
    image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Summer Sale",
    title2: "Flat 40% OFF",
    title3: "On All Items",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Trending Now",
    title2: "Best Picks",
    title3: "Just For You",
    image: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Limited Time",
    title2: "Buy 1 Get 1",
    title3: "Hurry Up!",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Offer() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
        <Carousel
          ref={ref}
          width={wp("95%")}
          height={hp("27%")}
          data={posterdata}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image style={styles.posterimage} source={{ uri: item.image }} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.discount}>{item.title2}</Text>
                <Text style={styles.subtitle}>{item.title3}</Text>
              </View>
            </View>
          )}
        />

        <Pagination.Basic
          progress={progress}
          data={posterdata}
          dotStyle={{ backgroundColor: "#C7C0B7", borderRadius: 50, width: wp("2.3%"), height: wp("2.3%") }}
          activeDotStyle={{ backgroundColor: colors.accent, width: wp("2.8%"), height: wp("2.8%") }}
          containerStyle={{ gap: wp("2%"), marginTop: hp("1.5%") }}
          onPress={onPressPagination}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: spacing.md,
  },
  card: {
    overflow: "hidden",
    borderRadius: radius.lg,
    marginHorizontal: wp("1%"),
  },
  textContainer: {
    position: "absolute",
    top: hp("6%"),
    left: wp("5%"),
    backgroundColor: "rgba(17,17,17,0.45)",
    borderRadius: radius.md,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  title: {
    color: colors.surface,
    fontSize: typography.body,
    fontWeight: "600",
  },
  discount: {
    color: colors.surface,
    fontSize: typography.h2,
    fontWeight: "800",
    marginVertical: spacing.xxs,
  },
  subtitle: {
    color: "#E5DFD8",
    fontSize: typography.caption,
    fontWeight: "600",
  },
  posterimage: {
    height: hp("27%"),
    width: wp("95%"),
    borderRadius: radius.lg,
    resizeMode: "cover",
  },
});
