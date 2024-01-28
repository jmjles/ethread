import { Button, Surface, Text } from "react-native-paper";
import TileCarousel from "../components/tile/TileCarousel";
import { StyleSheet, View } from "react-native";
import { CommunitiesData, Threads } from "../utils/dumbydata";
import PostList from "components/post/PostList";
import Container from "components/Container";
import CommunityList from "components/community/CommunityList";

export default function App() {
  return (
    <Container flexDir="column">
      <TileCarousel />
      <Container noFlex style={styles.container}>
        <Button mode="contained">
          <Text variant="bodyMedium">Create a Post</Text>
        </Button>
      </Container>
      <Container>
        <PostList posts={Threads} maxWidth="80%" />
        <CommunityList communities={CommunitiesData} width={"20%"} />
      </Container>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});
