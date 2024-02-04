import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { PostUser } from "./types";
import Container from "components/Container";
import { formatDate } from "utils/formatters";

const CommentHeader = ({
  user: { avatar, displayName, id, following },
  date,
}: CommentHeaderProps) => {
  const handleFollow = () => {};
  return (
    <Container noFlex style={styles.container}>
      <Container noFlex style={styles.container}>
        <Avatar.Image source={{ uri: avatar }} size={32} />
        <Text variant="bodyMedium">
          {displayName}
          <Text variant="bodySmall">{formatDate(date)}</Text>
        </Text>
      </Container>
      {!following && (
        <Button mode="contained" onPress={handleFollow}>
          Follow
        </Button>
      )}
    </Container>
  );
};
type CommentHeaderProps = {
  user: PostUser;
  date: string;
};
const styles = StyleSheet.create({
  container: {
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CommentHeader;
