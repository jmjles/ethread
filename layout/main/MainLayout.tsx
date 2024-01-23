import { View } from "react-native";
import Header from "./Header";
import Nav from "../components/nav/Nav";
import { SearchbarProps } from "react-native-paper";

const MainLayout = (props: Props) => {
  return (
    <View>
      <Header {...props} />
      <Nav />
      {props.children}
    </View>
  );
};
type Props = React.PropsWithChildren & SearchbarProps;
export default MainLayout;
