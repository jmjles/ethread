import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { PostUser } from "./types";

const ThreadHeader = ({
  user: { displayName, avatar },
  date,
  topic,
}: ThreadHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Avatar.Image
          source={{ uri: avatar }}
          size={32}
          style={styles.avatar}
        />
        <View>
          <Text variant="bodyMedium">
            r/{topic} <Text variant="bodySmall">{date}</Text>
          </Text>
          <Text>{displayName}</Text>
        </View>
      </View>
      <Button mode="contained">Join</Button>
    </View>
  );
};

type ThreadHeaderProps = {
  user: PostUser;
  topic: string;
  date: string;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    marginRight: 6,
  },
});
export default ThreadHeader;