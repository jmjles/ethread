import React from "react";
import Post, { PostProps } from "./Post";
import { DimensionValue, StyleSheet, View } from "react-native";
import { Divider } from "react-native-paper";
import Container from "components/Container";

const PostList = ({ posts, width, maxWidth }: Props) => {
  const styles = StyleSheet.create({
    container: {
      width,
      maxWidth,
    },
  });
  return (
    <Container flexDir="column" style={styles.container}>
      {posts.map((t, i) => (
        <View key={i}>
          <Post {...t} />
          {posts.length !== i + 1 && <Divider />}
        </View>
      ))}
    </Container>
  );
};

type Props = {
  posts: PostProps[];
  width?: DimensionValue;
  maxWidth?: DimensionValue;
};
export default PostList;
