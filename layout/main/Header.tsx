import Search from "../components/Search";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, SearchbarProps, Surface } from "react-native-paper";

const Header = (props: SearchbarProps) => {
  return (
    <Surface elevation={0} style={styles.container}>
      <View />
      <Search {...props} />
      <Button mode="contained">Log in</Button>
    </Surface>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Header;
