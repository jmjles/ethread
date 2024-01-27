import Container from "components/Container";
import Search from "../components/Search";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, SearchbarProps } from "react-native-paper";

const Header = (props: SearchbarProps) => {
  return (
    <Container style={styles.container} noFlex>
      <Search {...props} />
      <Button mode="contained">Log in</Button>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexWrap: "nowrap",
    alignItems: "center",
  },
});
export default Header;
