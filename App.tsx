import Tile from "./components/Tile";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { threadPosts } from "./utils/dumbydata";
import MainLayout from "./layout/main/MainLayout";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const handleQuery = (text: string) => setQuery(text);
  return (
    <PaperProvider>
      <MainLayout {...{ value: query, onChangeText: handleQuery }}>
        {threadPosts.map((t) => (
          <Tile {...t} onPress={() => {}} key={t.topic} />
        ))}
      </MainLayout>
    </PaperProvider>
  );
}
