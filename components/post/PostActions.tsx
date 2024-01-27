import Container from "components/Container";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, SegmentedButtons, Text } from "react-native-paper";

const PostActions = () => {
  const commentOutline = "message-reply-outline";
  const downOutline = "arrow-down-bold-outline";
  const downBold = "arrow-down-bold";
  const commentBold = "message-reply";
  const upOutline = "arrow-up-bold-outline";
  const upBold = "arrow-up-bold";

  const [commentIcon, setCommentIcon] = useState(commentOutline);
  const [shareIcon, setShareIcon] = useState(upOutline);

  const [upVoteIcon, setUpVoteIcon] = useState(upOutline);
  const [downVoteIcon, setDownUpVoteIcon] = useState(downOutline);

  const [upVote, setUpVote] = useState<boolean | null>(null);

  useEffect(() => {
    if (upVote === null) {
      setUpVoteIcon(upOutline);
      setDownUpVoteIcon(downOutline);
    } else {
      setUpVoteIcon(upVote ? upBold : upOutline);
      setDownUpVoteIcon(upVote ? downOutline : downBold);
    }
  }, [upVote]);
  const toggleIcon = (name: string) => {
    switch (name) {
      case "comment":
        setCommentIcon((i) =>
          i === commentBold ? commentOutline : commentBold
        );
        break;
      case "share":
        setShareIcon((i) => (i === upOutline ? upBold : upOutline));
        break;
    }
  };
  const handleVote = (vote: boolean) => {
    const val = vote === upVote ? null : vote;
    setUpVote(val);
  };
  const handleShare = () => {};
  const handleComment = () => {};

  return (
    <Container noFlex style={styles.container}>
      <SegmentedButtons
        onValueChange={(v) => handleVote(v === "upvote")}
        value={upVote ? "upvote" : upVote === null ? "" : "downvote"}
        buttons={[
          { icon: upVoteIcon, value: "upvote" },
          { label: "34k", value: "", disabled: true },
          { icon: downVoteIcon, value: "downvote" },
        ]}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPressIn={() => toggleIcon("comment")}
        onPressOut={() => toggleIcon("comment")}
      >
        <View style={styles.button}>
          <Icon size={24} source={commentIcon} />
          <Text variant="bodyMedium" style={styles.buttonText}>
            2.4k
          </Text>
        </View>
      </Button>
      <Button
        mode="contained"
        onPressIn={() => toggleIcon("share")}
        onPressOut={() => toggleIcon("share")}
        onPress={handleShare}
      >
        <View style={styles.button}>
          <Icon size={24} source={shareIcon} />
          <Text variant="bodyMedium" style={styles.buttonText}>
            Share
          </Text>
        </View>
      </Button>
    </Container>
  );
};
const styles = StyleSheet.create({
  ButtonC: {
    marginRight: 4,
  },
  container: {
    flexWrap: "nowrap",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    flexWrap: "nowrap",
    display: "flex",
    flexDirection: "row",
  },
  buttonText: {
    marginLeft: 2,
  },
});
export default PostActions;
