import Container from "components/Container";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

const Community = () => {
  const { id } = useLocalSearchParams();

  return <Container>{id}</Container>;
};

export default Community;
