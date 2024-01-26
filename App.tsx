import { StatusBar } from "expo-status-bar";
import { Divider, PaperProvider } from "react-native-paper";
import MainLayout from "./layout/main/MainLayout";
import { useState } from "react";
import TileCarousel from "./components/TileCarousel";
import Post from "./layout/components/post/Post";
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
          {Threads.map((t, i) => (
            <>
              <Post {...t} />
              {Threads.length !== i + 1 && (
                <Divider style={{ maxWidth: 800 }} />
              )}
            </>
          ))}
        </View>
      </MainLayout>
    </PaperProvider>
  );
}
