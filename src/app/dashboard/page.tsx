"use client";
//dashboard
import React from "react";
import ChatBox from "./layout/ChatBox/ChatBox";
import Friends from "./layout/Friends/Friends";
import MainSideBar from "./layout/MainSideBar/MainSideBar";
import SideBar from "./layout/SideBar/SideBar";

const Page: React.FC = () => {
  return (
    <div className="flex flex-row h-screen">
      <div
        style={{
          width: "6%",
        }}
        className="h-full"
      >
        <SideBar />
      </div>

      <div
        className="border-r border-opacity-25 border-white h-full"
        style={{
          width: "19%",
        }}
      >
        <MainSideBar />
      </div>

      <div
        className="flex-grow border-l border-r border-opacity-25 border-white h-full"
        style={{
          width: "60%",
        }}
      >
        <ChatBox />
      </div>

      <div
        className="w-110 flex-shrink-0 border-l border-opacity-25 border-white h-full"
        style={{
          width: "15%",
        }}
      >
        <Friends />
      </div>
    </div>
  );
};

export default Page;
// import { useGetUserByIdQuery } from "../../redux/features/user/userApi";

// const UserComponent: React.FC<{ _id: string }> = ({ _id }) => {
//   const { data: user, error, isLoading } = useGetUserByIdQuery(_id);
//   console.log("user:", user);

//   if (isLoading) return <div>loading</div>;
//   if (error) {
//     console.error("Error loading user:", error);
//     return <div>Error loading user</div>;
//   }
//   return (
//     <div>
//       {user?.firstName}
//       {user?.lastName}
//       {user?.avatar && <img src={user?.avatar} alt="avatar" />}
//     </div>
//   );
// };
