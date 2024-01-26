import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, SegmentedButtons, Text } from "react-native-paper";

const PostActions = () => {
  const [commentIcon, setCommentIcon] = useState("message-reply-outline");
  const [shareIcon, setShareIcon] = useState("arrow-up-bold-outline");

  const toggleIcon = (name: string) => {
    const commentOutline = "message-reply-outline";
    const commentBold = "message-reply";
    const shareOutline = "arrow-up-bold-outline";
    const shareBold = "arrow-up-bold";
    switch (name) {
      case "comment":
        setCommentIcon((i) =>
          i === commentOutline ? commentBold : commentOutline
        );
        break;
      case "share":
        setShareIcon((i) => (i === shareOutline ? shareBold : shareOutline));
        break;
    }
  };

  const handleVote = (upvote: boolean) => {};
  const handleShare = () => {};
  const handleComment = () => {};

  return (
    <View style={styles.container}>
      <SegmentedButtons
        buttons={[
          { icon: "arrow-up-bold-outline", value: "upvote" },
          { label: "34k", value: "", disabled: true },
          { icon: "arrow-down-bold-outline", value: "downvote" },
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
          <View style={styles.buttonText}>2.4k</View>
        </View>
      </Button>
      <Button
        mode="contained"
        onPressIn={() => toggleIcon("share")}
        onPressOut={() => toggleIcon("share")}
      >
        <View style={styles.button}>
          <Icon size={24} source={shareIcon} />
          <View style={styles.buttonText}>Share</View>
        </View>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
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
