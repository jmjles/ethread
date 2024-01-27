import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Surface, SurfaceProps } from "react-native-paper";

const Container = ({ flexDir = "row", noFlex, ...props }: ContainerProps) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: noFlex ? undefined : 1,
      flexDirection: flexDir,
    },
  });
  const styleD = [styles.container, props.style];
  const ele = props.elevation === undefined ? 0 : props.elevation;

  return (
    <Surface {...props} style={styleD} elevation={ele}>
      {props.children}
    </Surface>
  );
};

type ContainerProps = {
  flexDir?: ViewStyle["flexDirection"];
  noFlex?: boolean;
} & SurfaceProps;
export default Container;
