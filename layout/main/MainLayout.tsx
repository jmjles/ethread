import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Nav from "../components/nav/Nav";
import { SearchbarProps } from "react-native-paper";

const MainLayout = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Header {...props} />
      <View style={styles.container}>
        <Nav />
        {props.children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { display: "flex", flexDirection: "row" },
  mainContainer: {
    maxWidth: 1400,
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
  },
});
type Props = React.PropsWithChildren & SearchbarProps;
export default MainLayout;
