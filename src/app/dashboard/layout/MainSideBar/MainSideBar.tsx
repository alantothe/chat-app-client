import { useEffect, useState } from "react";
import getConversations from "@/api/get/getConversations";
import type { Conversation } from "../../../../../types";
import Avatar from "@/hooks/Avatar";

const MainSideBar: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  // truncate string
  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + " ...";
  };

  useEffect(() => {
    getConversations("668160ac59fcf6642d38bd29")
      .then((data) => {
        console.log("data:", data);
        setConversations(data);
      })
      .catch((error) => {
        console.error("Error fetching conversations:", error);
      });
  }, []);
  return (
    <div
      className="h-full text-white flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "rgb(18, 18, 22)" }}
    >
      <div className="flex justify-center relative py-6 ">
        <input
          className="bg-zinc-800 placeholder-zinc-600 h-12 w-11/12 rounded outline-none pl-2 placeholder:text-xs "
          placeholder="Search..."
        ></input>
        <div className="absolute bottom-0 left-0 right-0 w-11/12 mx-auto border-b border-white border-opacity-20"></div>
      </div>

      <div className="flex justify-center py-4">
        <div className="flex justify-between w-11/12 h-14 ">
          <button
            className="bg-zinc-800 text-white font-thin text-sm rounded shadow"
            style={{ width: "45%" }}
          >
            Direct Messages
          </button>
          <button
            className="bg-zinc-800 text-white font-thin text-sm rounded shadow"
            style={{ width: "45%" }}
          >
            Group Message
          </button>
        </div>
      </div>
      <div className="flex-col">
        {conversations
          ? conversations.map((conversation) => (
              <div className={`flex mx-6 my-4 pb-3 `}>
                <Avatar
                  size="md"
                  url={conversation.detailedLastMessageFrom.avatar}
                />
                <div className="flex-col ml-3 mt-1">
                  <div className="flex ml-3 mt-1">
                    <h1 className="text-xl">
                      {conversation.detailedLastMessageFrom.firstName}
                    </h1>
                    {""}
                    <h1 className="text-xl">
                      {conversation.detailedLastMessageFrom.lastName}
                    </h1>
                  </div>

                  <p className=" text-sm text-zinc-700">
                    {truncate(conversation.lastMessage || "", 23)}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default MainSideBar;
