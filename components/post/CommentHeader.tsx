import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { PostUser } from "./types";

const CommentHeader = ({
  user: { avatar, displayName, id, following },
  date,
}: CommentHeaderProps) => {
  const handleFollow = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Avatar.Image source={{ uri: avatar }} size={32} />
        <Text variant="bodyMedium">
          {displayName}
          <Text variant="bodySmall"> 9 hrs ago</Text>
        </Text>
      </View>
      {!following && (
        <Button mode="contained" onPress={handleFollow}>
          Follow
        </Button>
      )}
    </View>
  );
};
type CommentHeaderProps = {
  user: PostUser;
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
});

export default CommentHeader;
