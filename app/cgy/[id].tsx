import Container from "components/Container";
import NotFound from "components/NotFound";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

const Category = () => {
  const { id } = useLocalSearchParams();
  const [notFound, setNotFound] = useState(false);
  const Content = () =>
    notFound ? (
      <NotFound type="category" value={id} />
    ) : (
      <Container>{id}</Container>
    );

  return (
    <>
      <Content />
    </>
  );
};

export default Category;
