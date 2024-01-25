import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import MainLayout from "./layout/main/MainLayout";
import { useState } from "react";
import TileCarousel from "./components/TileCarousel";

export default function App() {
  const [query, setQuery] = useState("");
  const handleQuery = (text: string) => setQuery(text);
  return (
    <PaperProvider>
      <MainLayout {...{ value: query, onChangeText: handleQuery }}>
        <TileCarousel />
      </MainLayout>
    </PaperProvider>
  );
}
