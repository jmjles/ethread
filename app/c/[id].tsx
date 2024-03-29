import Container from "components/Container";
import NotFound from "components/NotFound";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";

const Community = () => {
  const { id } = useLocalSearchParams();
  const [notFound, setNotFound] = useState(false);

  const Content = () =>
    notFound ? (
      <NotFound type="community" value={id} />
    ) : (
      <Container>{id}</Container>
    );
  return (
    <>
      <Content />
    </>
  );
};

export default Community;
