import { Button, Surface, Text } from "react-native-paper";
import TileCarousel from "../components/tile/TileCarousel";
import { View } from "react-native";
import { Threads } from "../utils/dumbydata";
import PostList from "components/post/PostList";
import Container from "components/Container";

export default function App() {
  return (
    <Container flexDir="column">
      <TileCarousel />
      <Button mode="contained">
        <Text variant="bodyMedium">Create a Post</Text>
      </Button>
      <PostList posts={Threads} maxWidth="80%"/>
    </Container>
  );
}
