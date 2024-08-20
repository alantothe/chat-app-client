"use client";
import React from "react";
import ChatBox from "./layout/ChatBox/ChatBox";
import Friends from "./layout/Friends/Friends";
import MainSideBar from "./layout/MainSideBar/MainSideBar";
import SideBar from "./layout/SideBar/SideBar";
import { useEffect,useState } from "react";
import { useGetUserByIdQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from 'next/navigation'
import { Token } from "../../../types";
import { jwtDecode } from 'jwt-decode';

const Page: React.FC = () => {
  const router = useRouter()
  const [id , setId] = useState<string>('')
  const token = useAppSelector((state) => state.tokenReducer);
  const { data: user, error, isLoading } = useGetUserByIdQuery(id, {
    skip: !id, // This skips the query if id is not set
  });
  useEffect(() => {
    if(!token.token)
    {
      router.push('/login')
    }
    else if(token.token)
    {
      const decoded = jwtDecode<Token>(token.token);
      setId(decoded._id)
    }
  }, [token]);
  return (
    <div className="flex flex-row h-screen overflow-x-auto">
      <div className="flex flex-row min-w-[1200px] w-full">
        <div
          style={{
            width: "6%",
          }}
          className="h-full flex-shrink-0"
        >
          <SideBar />
        </div>

        <div
          className="border-r border-opacity-25 border-white h-full flex-shrink-0"
          style={{
            width: "22%",
          }}
        >
          <MainSideBar  />
        </div>

        <div
          className="border-l border-r border-opacity-25 border-white h-full flex-shrink-0"
          style={{
            width: "60%",
          }}
        >
          <ChatBox />
        </div>

        <div
          className="border-l border-opacity-25 border-white h-full flex-shrink-0"
          style={{
            width: "12%",
          }}
        >
          <Friends />
        </div>
      </div>
    </div>
  );
};

export default Page;

