import { StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { threadPosts } from "../utils/dumbydata";
import Tile from "./Tile";
import { useEffect, useRef, useState } from "react";
import { FAB } from "react-native-paper";

const FeaturedTiles = () => {
  const [active, setActive] = useState(0);
  const carousel = useRef<any>();
  const handleNav = (next: boolean) => {
    if (next) {
      setActive(active + 1);
    } else {
      setActive(active - 1);
    }
  };
  useEffect(() => {
    console.log(carousel.current.currentIndex);
    carousel.current.snapToItem(active);
  }, [active]);
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={threadPosts}
        sliderWidth={1000}
        itemWidth={280}
        enableSnap={true}
        vertical={false}
        scrollEnabled={false}
        containerCustomStyle={{ flexGrow: 0 }}
        activeSlideAlignment="start"
        activeSlideOffset={1}
        ref={carousel}
        renderItem={({ item }) => <Tile {...item} onPress={() => {}} />}
      />
      <FAB
        icon="chevron-left"
        disabled={active <= 0}
        onPress={() => handleNav(false)}
        style={styles.prev}
      />
      <FAB
        icon="chevron-right"
        disabled={active >= threadPosts.length - 1}
        onPress={() => handleNav(true)}
        style={styles.next}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  prev: {
    position: "absolute",
    left: 12,
    top: "50%",
    transform: "translateY(-50%)",
  },
  next: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
  },
  container: { position: "relative", height: 210 },
});
export default FeaturedTiles;
