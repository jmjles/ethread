import Container from "components/Container";
import NotFound from "components/NotFound";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";

const User = () => {
  const { id } = useLocalSearchParams();
  const [notFound, setNotFound] = useState(false);

  const Content = () =>
    notFound ? (
      <NotFound type="user" value={id} />
    ) : (
      <Container>{id}</Container>
    );
  return (
    <>
      <Content />
    </>
  );
};

export default User;
