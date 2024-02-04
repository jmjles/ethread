import React from "react";
import { Text } from "react-native-paper";
import CommentHeader from "./CommentHeader";
import ThreadHeader from "./ThreadHeader";
import PostActions, { PostActionsProps } from "./PostActions";
import { StyleSheet } from "react-native";
import { PostUser } from "./types";
import Container from "components/Container";
import { DateTime } from "luxon";

const Post = ({
  title,
  content,
  user,
  topic,
  date,
  type,
  upVotes,
  downVotes,
}: PostProps) => {
  return (
    <Container flexDir="column" style={styles.container}>
      {type === "thread" ? (
        <ThreadHeader user={user} topic={topic} date={date} />
      ) : (
        <CommentHeader user={user} date={date} />
      )}
      <Container noFlex flexDir="column" style={styles.contentContainer}>
        {type === "thread" ? (
          <>
            <Text variant="headlineMedium">{title}</Text>
            <Text variant="bodyLarge">{content}</Text>
          </>
        ) : (
          <Text variant="bodyMedium">{content}</Text>
        )}
      </Container>
      <PostActions upVotes={upVotes} downVotes={downVotes} />
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
} & PostActionsProps;

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
