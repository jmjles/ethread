import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";

const Tile = ({ title, subtitle, img, topic, topics, onPress }: Props) => {
  return (
    <TouchableRipple style={styles.container} onPress={onPress}>
      <View>
        <Image source={{ uri: img }} style={styles.img} />
        <View style={styles.content}>
          <Text
            variant="titleLarge"
            ellipsizeMode="tail"
            suppressHighlighting
            numberOfLines={1}
            style={styles.title}
          >
            {title}
          </Text>
          <Text
            variant="titleMedium"
            ellipsizeMode="tail"
            numberOfLines={1}
            suppressHighlighting
            style={styles.text}
          >
            {subtitle}
          </Text>
          <View style={styles.tagContainer}>
            <View style={styles.icon}>
              <Icon size={24} color="black" source="bullhorn-outline" />
            </View>
            <Text
              variant="bodyMedium"
              style={[styles.tag, styles.text]}
              suppressHighlighting
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              t/{topic}
              {topics && (
                <Text
                  variant="labelSmall"
                  suppressHighlighting
                  style={styles.text}
                >
                  {" "}
                  and more
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
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
    width: 260,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    padding: 5,
    borderRadius: 5,
    maxWidth: "85%",
  },
  text: { color: "#FFF" },
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
