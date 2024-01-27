import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Nav from "../components/nav/Nav";
import { SearchbarProps } from "react-native-paper";
import Container from "components/Container";

const MainLayout = (props: Props) => {
  return (
    <Container flexDir="column" style={styles.mainContainer}>
      <Header {...props} />
      <Container>
        <Nav />
        {props.children}
      </Container>
    </Container>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1400,
  },
});
type Props = React.PropsWithChildren & SearchbarProps;
export default MainLayout;
