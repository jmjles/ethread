import React from "react";
import { Surface, Text } from "react-native-paper";
import CommentHeader from "./CommentHeader";
import ThreadHeader from "./ThreadHeader";
import PostActions from "./PostActions";
import { StyleSheet, View } from "react-native";
import { PostUser } from "./types";
import Container from "components/Container";

const Post = ({ title, content, user, topic, date, type }: PostProps) => {
  return (
    <Container flexDir="column" style={styles.container}>
      {type === "thread" ? (
        <ThreadHeader user={user} topic={topic} date={date} />
      ) : (
        <CommentHeader user={user} date={date} />
      )}
      <Container noFlex flexDir="column" style={styles.contentContainer}>
        <Text variant="headlineMedium">{title}</Text>
        <Text variant="bodyLarge">{content}</Text>
      </Container>
      <PostActions />
    </Container>
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
    flexWrap: "nowrap",
  },
  contentContainer: {
    padding: 12,
    flex: 1,
  },
});
export default Post;
