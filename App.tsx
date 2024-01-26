import { StatusBar } from "expo-status-bar";
import { Button, Divider, PaperProvider, Text } from "react-native-paper";
import MainLayout from "./layout/main/MainLayout";
import { useState } from "react";
import TileCarousel from "./components/tile/TileCarousel";
import Post from "./components/post/Post";
import { View } from "react-native";
import { Threads } from "./utils/dumbydata";

export default function App() {
  const [query, setQuery] = useState("");
  const handleQuery = (text: string) => setQuery(text);
  return (
    <PaperProvider>
      <MainLayout {...{ value: query, onChangeText: handleQuery }}>
        <View>
          <TileCarousel />
          <Button mode="contained">
            <Text variant="bodyMedium">Create a Post</Text>
          </Button>
          {Threads.map((t, i) => (
            <View key={i}>
              <Post {...t} />
              {Threads.length !== i + 1 && (
                <Divider style={{ maxWidth: 800 }} />
              )}
            </View>
          ))}
        </View>
      </MainLayout>
    </PaperProvider>
  );
}
