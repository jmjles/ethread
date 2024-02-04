import { Link } from "expo-router";
import React from "react";
import { Avatar, List } from "react-native-paper";

const Community = ({ avatar, name, id }: CommunityProps) => {
  const getLabel = () => {
    const tmp = name.split(" ");
    if (tmp.length === 1) return tmp[0].substring(0, 2);
    return tmp[0][0] + tmp[1][0];
  };
  return (
    <Link href={`c/${id}`}>
      <List.Item
        left={
          avatar
            ? () => <Avatar.Image source={{ uri: avatar }} size={32} />
            : () => <Avatar.Text label={getLabel()} size={32} />
        }
        title={name}
        titleNumberOfLines={1}
        titleEllipsizeMode="tail"
      />
    </Link>
  );
};
export type CommunityProps = {
  avatar?: string;
  name: string;
  id: string;
};
export default Community;
