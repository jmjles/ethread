import React from "react";
import Container from "./Container";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const NotFound = ({ type, value }: NotFoundProps) => {
  return (
    <Container style={styles.container}>
      <Text variant="headlineMedium">
        The {type} {value} you are looking for does not exist.
      </Text>
    </Container>
  );
};
type NotFoundProps = {
  type: "user" | "community" | "thread" | "category";
  value: string | string[] | undefined;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 120,
  },
});
export default NotFound;
