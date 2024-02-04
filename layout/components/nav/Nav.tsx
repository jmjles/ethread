import { Divider, List } from "react-native-paper";
import NavItem, { NavItemProps } from "./NavItem";
import NavCollapseItem, { NavCollapseItemProps } from "./NavCollapseItem";
import { StyleSheet } from "react-native";

const staticPages: NavItemProps[] = [
  { icon: "home", title: "Home", link: "/" },
];

const categories: NavCollapseItemProps[] = [
  {
    iconClosed: "gamepad-variant",
    iconOpen: "gamepad-variant-outline",
    title: "Gaming",
    items: [{ icon: "nintendo-game-boy", title: "Mario", link: "/cgy/mario" }],
  },
  {
    iconClosed: "trophy",
    iconOpen: "trophy-outline",
    title: "Sports",
    items: [{ icon: "nintendo-game-boy", title: "Mario", link: "/cgy/mario" }],
  },
  {
    iconClosed: "handshake",
    iconOpen: "handshake-outline",
    title: "Business",
    items: [{ icon: "nintendo-game-boy", title: "Mario", link: "/cgy/mario" }],
  },
  {
    iconClosed: "piggy-bank",
    iconOpen: "piggy-bank-outline",
    title: "Crypto",
    items: [{ icon: "nintendo-game-boy", title: "Mario", link: "/cgy/mario" }],
  },
  {
    iconClosed: "television",
    iconOpen: "television-ambient-light",
    title: "Television",
    items: [{ icon: "nintendo-game-boy", title: "Mario", link: "/cgy/mario" }],
  },
  {
    iconClosed: "account",
    iconOpen: "account-outline",
    title: "Celebrity",
    items: [{ icon: "nintendo-game-boy", title: "Mario", link: "/cgy/mario" }],
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
        <NavCollapseItem {...c} id={i} key={i} />
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
