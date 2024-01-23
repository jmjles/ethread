import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar, SearchbarProps } from "react-native-paper";

const Search = ({
  placeholder = "Search ETHread",
  onChangeText,
  value,
}: SearchbarProps) => {
  return (
    <Searchbar
      {...{  onChangeText, value,placeholder }}
      style={styles.search}
    />
  );
};
const styles = StyleSheet.create({ search: { flex: 1, maxWidth: 780 } });
export default Search;
