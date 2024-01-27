import { Slot } from "expo-router";
import MainLayout from "layout/main/MainLayout";
import React, { useState } from "react";

const _layout = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (text: string) => setQuery(text);
  return (
    <MainLayout {...{ value: query, onChangeText: handleQuery }}>
      <Slot />
    </MainLayout>
  );
};

export default _layout;
