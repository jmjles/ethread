import { Slot } from "expo-router";
import MainLayout from "layout/main/MainLayout";
import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";

const _layout = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (text: string) => setQuery(text);
  return (
    <PaperProvider>
      <MainLayout {...{ value: query, onChangeText: handleQuery }}>
        <Slot />
      </MainLayout>
    </PaperProvider>
  );
};

export default _layout;
