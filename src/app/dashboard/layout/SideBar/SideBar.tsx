import { useAppSelector } from "@/redux/hooks";
import Avatar from "@/hooks/Avatar";

const SideBar: React.FC = () => {
  const userData = useAppSelector((state) => state.userReducer);
  return (
    <div
      className="h-full text-white flex flex-col items-center justify-start pt-7 "
      style={{ backgroundColor: "rgb(18, 18, 22)" }}
    >
      <Avatar size="xl" url={userData.avatar || ""} />
    </div>
  );
};

export default SideBar;
