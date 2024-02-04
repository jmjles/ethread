import { useLocalSearchParams } from "expo-router";

const Category = () => {
  const { id } = useLocalSearchParams();
  return <div>{id}</div>;
};

export default Category;
