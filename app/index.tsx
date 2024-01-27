import { Button, Divider, Text } from "react-native-paper";
import TileCarousel from "../components/tile/TileCarousel";
import Post from "../components/post/Post";
import { View } from "react-native";
import { Threads } from "../utils/dumbydata";

export default function App() {
  return (
    <View>
      <TileCarousel />
      <Button mode="contained">
        <Text variant="bodyMedium">Create a Post</Text>
      </Button>
      {Threads.map((t, i) => (
        <View key={i}>
          <Post {...t} />
          {Threads.length !== i + 1 && <Divider style={{ maxWidth: 800 }} />}
        </View>
      ))}
    </View>
  );
}
