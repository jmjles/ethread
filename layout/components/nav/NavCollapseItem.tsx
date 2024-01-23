import React, { useState } from "react";
import { Drawer, List } from "react-native-paper";
import NavItem, { NavItemProps } from "./NavItem";

const NavCollapseItem = ({
  title,
  iconOpen,
  iconClosed,
  items,
  id,
}: NavCollapseItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleOpen = () => {
    setExpanded((p) => !p);
    console.log("in");
  };
  return (
    <List.Accordion
      title={title}
      left={(p) => <List.Icon {...p} icon={expanded ? iconOpen : iconClosed} />}
      onPress={toggleOpen}
      expanded={expanded}
    >
      {items.map((i) => (
        <NavItem {...i} key={i.link} />
      ))}
    </List.Accordion>
  );
};
export type NavCollapseItemProps = {
  title: string;
  iconOpen: string;
  iconClosed: string;
  items: NavItemProps[];
  id?: any;
};
export default NavCollapseItem;
