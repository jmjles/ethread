import { Divider, List } from "react-native-paper";
import NavItem, { NavItemProps } from "./NavItem";
import NavCollapseItem, { NavCollapseItemProps } from "./NavCollapseItem";
import { StyleSheet } from "react-native";
const staticPages: NavItemProps[] = [
  { icon: "home", title: "Home", link: "/" },
  { icon: "account-group", title: "Popular", link: "/popular" },
];
const categories: NavCollapseItemProps[] = [
  {
    iconClosed: "gamepad-variant",
    iconOpen: "gamepad-variant-outline",
    title: "Gaming",
    items: [
      { icon: "nintendo-game-boy", title: "Mario", link: "/gaming/mario" },
    ],
  },
  {
    iconClosed: "trophy",
    iconOpen: "trophy-outline",
    title: "Sports",
    items: [
      { icon: "nintendo-game-boy", title: "Mario", link: "/gaming/mario" },
    ],
  },
  {
    iconClosed: "handshake",
    iconOpen: "handshake-outline",
    title: "Business",
    items: [
      { icon: "nintendo-game-boy", title: "Mario", link: "/gaming/mario" },
    ],
  },
  {
    iconClosed: "piggy-bank",
    iconOpen: "piggy-bank-outline",
    title: "Crypto",
    items: [
      { icon: "nintendo-game-boy", title: "Mario", link: "/gaming/mario" },
    ],
  },
  {
    iconClosed: "television",
    iconOpen: "television-ambient-light",
    title: "Television",
    items: [
      { icon: "nintendo-game-boy", title: "Mario", link: "/gaming/mario" },
    ],
  },
  {
    iconClosed: "account",
    iconOpen: "account-outline",
    title: "Celebrity",
    items: [
      { icon: "nintendo-game-boy", title: "Mario", link: "/gaming/mario" },
    ],
  },
];
const Nav = () => {
  return (
    <List.Section style={styles.container}>
      {staticPages.map((p) => (
        <NavItem {...p} key={p.link} />
      ))}
      <Divider />
      {categories.map((c, i) => (
        <NavCollapseItem {...c} id={i} />
      ))}
    </List.Section>
  );
};
const styles = StyleSheet.create({
  container: {
    maxWidth: 240,
  },
});
export default Nav;
