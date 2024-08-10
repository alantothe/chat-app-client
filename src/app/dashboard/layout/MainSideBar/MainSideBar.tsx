import { useEffect, useState } from "react";
import getConversations from "@/api/get/getConversations";
import getConversationsGroup from "@/api/get/getGroupConversations";
import type { Conversation } from "../../../../../types";
import Avatar from "@/hooks/Avatar";
import { useAppSelector } from "@/redux/hooks";
import {UserState} from "../../../../../types";


const MainSideBar: React.FC = () => {

  //fix userData and display timing issue
  const [display, setDisplay] = useState<string>("Direct Messages");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [groupConversations, setGroupConversations] = useState<Conversation[]>(
    []
  );
  const [search, setSearch] = useState("");

  const userData = useAppSelector((state) => state.userReducer)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("search:", e.target.value);
  };

  useEffect(() => {
    if (display === "Direct Messages") {
      getConversations(userData._id || "")
        .then((data) => {
          console.log("data:", data);
          setConversations(data);
        })
        .catch((error) => {
          console.error("Error fetching conversations:", error);
        });
    } else if (display === "Group Messages") {
      getConversationsGroup(userData._id || "")
        .then((data) => {
          console.log("group data:", data);
          setGroupConversations(data);
        })
        .catch((error) => {
          console.error("Error fetching group conversations:", error);
        });
    }
  }, [display, userData]);

  const renderConversations = (conversations: Conversation[]) => {
    return conversations.map((conversation) => (
      <div key={conversation._id} className="flex mx-6 my-4 pb-3">
        <Avatar size="md" url={conversation.detailedLastMessageFrom.avatar} />
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
          <p className="text-sm text-zinc-700">
            {truncate(conversation.lastMessage || "", 23)}
          </p>
        </div>
      </div>
    ));
  };

  // Truncate string
  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + " ...";
  };

  return (
    <div
      className="h-full text-white flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "rgb(18, 18, 22)" }}
    >
      <div className="flex justify-center relative py-6">
        <input
          className="bg-zinc-800 placeholder-zinc-600 h-12 w-11/12 rounded outline-none pl-2 placeholder:text-xs"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        ></input>
        <div className="absolute bottom-0 left-0 right-0 w-11/12 mx-auto border-b border-white border-opacity-20"></div>
      </div>

      <div className="flex justify-center py-4">
        <div className="flex justify-between w-11/12 h-14">
          <button
            className={`bg-zinc-800 text-white font-thin text-sm rounded shadow ${
              display === "Direct Messages" ? "bg-gray-700" : ""
            }`}
            style={{ width: "45%" }}
            onClick={() => setDisplay("Direct Messages")}
          >
            Direct Messages
          </button>
          <button
            className={`bg-zinc-800 text-white font-thin text-sm rounded shadow ${
              display === "Group Messages" ? "bg-gray-700" : ""
            }`}
            style={{ width: "45%" }}
            onClick={() => setDisplay("Group Messages")}
          >
            Group Messages
          </button>
        </div>
      </div>
      <div className="flex-col">
        {display === "Direct Messages" && renderConversations(conversations)}
        {display === "Group Messages" &&
          renderConversations(groupConversations)}
      </div>
    </div>
  );
};

export default MainSideBar;
