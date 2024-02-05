import React from "react";
import { Text } from "react-native-paper";
import CommentHeader from "./CommentHeader";
import ThreadHeader from "./ThreadHeader";
import PostActions, { PostActionsProps } from "./PostActions";
import { StyleSheet } from "react-native";
import { PostUser } from "./types";
import Container from "components/Container";

const Post = ({
  title,
  content,
  user,
  topic,
  date,
  type,
  upVotes,
  downVotes,
  displayFull,
}: PostProps) => {
  
  const Header = () => {
    if (type === "comment") return <CommentHeader user={user} date={date} />;
    return <ThreadHeader user={user} topic={topic} date={date} />;
  };

  const Content = () => {
    if (type === "comment") return <Text variant="bodyMedium">{content}</Text>;
    if (displayFull)
      return (
        <>
          <Text variant="headlineMedium">{title}</Text>
          <Text variant="bodyLarge">{content}</Text>
        </>
      );
    return <Text variant="headlineMedium">{title}</Text>;
  };

  return (
    <Container flexDir="column" style={styles.container}>
      <Header />
      <Container noFlex flexDir="column" style={styles.contentContainer}>
        <Content />
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
  displayFull?: Boolean;
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
