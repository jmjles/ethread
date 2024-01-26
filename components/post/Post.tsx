import React from "react";
import { Surface, Text } from "react-native-paper";
import CommentHeader from "./CommentHeader";
import ThreadHeader from "./ThreadHeader";
import PostActions from "./PostActions";
import { StyleSheet, View } from "react-native";
import { PostUser } from "./types";

const Post = ({ title, content, user, topic, date, type }: PostProps) => {
  return (
    <Surface style={styles.container} elevation={0}>
      {type === "thread" ? (
        <ThreadHeader user={user} topic={topic} date={date} />
      ) : (
        <CommentHeader user={user} date={date} />
      )}
      <View style={styles.contentContainer}>
        <Text variant="headlineMedium">{title}</Text>
        <Text variant="bodyLarge">{content}</Text>
      </View>
      <PostActions />
    </Surface>
  );
};

export type PostProps = {
  user: PostUser;
  title: string;
  content: string;
  type: "comment" | "thread";
  img?: string;
  topic: string;
  date: string;
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    maxWidth: 800,
  },
  contentContainer: {
    padding: 12,
  },
});
export default Post;
