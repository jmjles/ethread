import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon, Text } from "react-native-paper";

const Tile = ({
  title = "title",
  subtitle = "subtitle",
  img = "https://picsum.photos/300",
  topic = "topic",
  topics = true,
  onPress = () => {},
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...onPress}>
      <Image source={{ uri: img }} style={styles.img} />
      <View style={styles.content}>
        <Text variant="titleLarge" style={styles.title}>
          {title}
        </Text>
        <Text variant="titleMedium">{subtitle}</Text>
        <View style={styles.tagContainer}>
          <View style={styles.icon}>
            <Icon size={24} color="black" source="bullhorn-outline" />
          </View>
          <Text variant="bodyMedium" style={styles.tag}>
            r/{topic}
            {topics && <Text variant="labelSmall"> and more</Text>}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  img: {
    borderRadius: 12,
    height: 210,
    width: 280,
    position: "absolute",
    zIndex: -1,
  },
  container: {
    position: "relative",
    height: 210,
    width: 280,
  },
  content: {
    position: "absolute",
    top: 120,
    left: 20,
  },
  title: {
    fontWeight: "600",
    color: "#FFF",
  },
  icon: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    width: 24,
    marginRight: 4,
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tag: {
    fontWeight: "600",
  },
});

type Props = {
  title: string;
  subtitle: string;
  img: string;
  topic: string;
  topics: boolean;
  onPress: any;
};
export default Tile;
