import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Slot } from "expo-router";
import MainLayout from "layout/main/MainLayout";
import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { serverURL } from "utils/connections";

const _layout = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (text: string) => setQuery(text);
  const client = new ApolloClient({
    uri: `${serverURL}graphql`,
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={{}}>
        <MainLayout {...{ value: query, onChangeText: handleQuery }}>
          <Slot />
        </MainLayout>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default _layout;
