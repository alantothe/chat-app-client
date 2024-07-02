"use client";

import React from "react";
import { useGetUserByIdQuery } from "../redux/features/user/userApi";

const UserComponent: React.FC<{ _id: string }> = ({ _id }) => {
  const { data: user, error, isLoading } = useGetUserByIdQuery(_id);

  if (isLoading) return <div>loading</div>;
  if (error) {
    console.error("Error loading user:", error);
    return <div>Error loading user</div>;
  }
  return (
    <div>
      {user?.firstName}
      {user?.lastName}
      {user?.avatar && <img src={user?.avatar} alt="avatar" />}
    </div>
  );
};

const Page: React.FC = () => {
  const _id = "";
  return (
    <div>
      <h1>User Information</h1>
      <UserComponent _id={_id} />
    </div>
  );
};

export default Page;
