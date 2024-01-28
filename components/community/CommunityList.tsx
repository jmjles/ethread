import Container from "components/Container";
import React from "react";
import { List } from "react-native-paper";
import Community, { CommunityProps } from "./Community";
import { DimensionValue } from "react-native";

const CommunityList = ({ communities, width }: CommunityListProps) => {
  return (
    <Container noFlex flexDir="column" style={{ width }}>
      <List.Section>
        <List.Subheader>Popular Communities</List.Subheader>
        {communities.map((c) => (
          <Community {...c} />
        ))}
      </List.Section>
    </Container>
  );
};
type CommunityListProps = {
  communities: CommunityProps[];
  width: DimensionValue;
};
export default CommunityList;
