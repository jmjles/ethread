import Search from "../components/Search";
import React from "react";
import { View } from "react-native";
import { SearchbarProps } from "react-native-paper";

const Header = (props: SearchbarProps) => {
  return (
    <View>
      <Search {...props} />
    </View>
  );
};

export default Header;
