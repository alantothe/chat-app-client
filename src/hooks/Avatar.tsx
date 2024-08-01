import React from "react";
import useAvatar from "./useAvatar";

interface AvatarProps {
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({ size, url }) => {
  const { avatarSize } = useAvatar({ size, url });

  return (
    <img
      src={url}
      alt="avatar"
      style={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: "50%",
      }}
    />
  );
};

export default Avatar;
