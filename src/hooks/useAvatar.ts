import { useMemo } from "react";
import { avatarSizes } from "./constants/avatarSizes";

type AvatarSize = "sm" | "md" | "lg" | "xl" | "xxl";

interface UseAvatarProps {
  size: AvatarSize;
  url: string;
}

const useAvatar = ({ size, url }: UseAvatarProps) => {
  const avatarSize = useMemo(() => avatarSizes[size], [size]);

  return { avatarSize, url };
};

export default useAvatar;
