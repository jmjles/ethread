import { router } from "expo-router";
import React from "react";
import { Drawer, List } from "react-native-paper";

const NavItem = ({ title, icon, link }: NavItemProps) => {
  const handlePress = () => {
    router.navigate(!link ? "/" : link);
  };
  return (
    <List.Item
      title={title}
      left={(p) => <List.Icon {...p} icon={icon} />}
      onPress={handlePress}
    />
  );
};

export type NavItemProps = {
  title: string;
  icon: string;
  link: string;
};

export default NavItem;
