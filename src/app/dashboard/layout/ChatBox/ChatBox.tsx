import { useAppSelector } from "@/redux/hooks";
import getMessages from "@/api/get/getMessages";
import React, { useEffect, useState } from "react";
import Avatar from "@/hooks/Avatar";
import Message from "@/hooks/Message";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  id: string;
}

interface SenderId {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  id: string;
}

interface Message {
  _id: string;
  conversationId: string;
  senderId: SenderId;
  message: string;
  img: string[];
  timestamp: string; 
  __v: number;
}

interface Response {
  members: User[] | null;
  messages: Message[] | null;
}

const ChatBox: React.FC = () => {
  const userData = useAppSelector((state) => state.userReducer);
  const [data, setData] = useState<Response | null>(null);

  const { _id, openConversation } = userData;

  useEffect(() => {
    if (openConversation) {
      getMessages(_id, openConversation)
        .then((data: Response) => {
          console.log(data);
          setData(data);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }, [openConversation]);

  const renderHeader = () => (
    <header className="h-24 relative flex-shrink-0">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <h1>Welcome! Select a Friend to Chat</h1>
      </div>
      <div
        style={{ width: "95%" }}
        className="mx-auto absolute bottom-0 left-0 right-0 border-b border-white border-opacity-20"
      ></div>
    </header>
  );

  const renderMembersHeader = (members: User[] | null) => (
    <div className="flex items-center overflow-hidden p-4">
      {members ? (
        <header className="h-24 overflow-hidden  relative flex-shrink-0">
          {members.map((member) => (
            <div key={member._id} className="flex items-center mb-4">
              <Avatar size="md" url={member.avatar} />
              <h1 className="text-lg ml-4">{`${member.firstName} ${member.lastName}`}</h1>
            </div>
          ))}
          <div
            style={{ width: "95%" }}
            className="mx-auto absolute bottom-0 left-0 right-0 border-b border-white border-opacity-20"
          ></div>
        </header>
      ) : (
        <p>No members available</p>
      )}
    </div>
  );
  const renderMessages = (messages: Message[] | null) => (
    <div className="overflow-y-auto flex-grow flex flex-col p-4">
      {messages ? (
        messages.map((message) => (
          <Message key={message._id} message={message} /> 
        ))
      ) : (
        <p>No messages available</p>
      )}
    </div>
  );

  return (
    <div className="h-full text-white flex flex-col" style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      {data && data.members ? renderMembersHeader(data.members) : renderHeader()}
      {data ? (
        <>
          {renderMessages(data.messages)}
          <footer className="flex w-full px-5 justify-center flex-shrink-0 mb-5">
            <div className="relative w-full px-3 h-12">
              <input
                name="message"
                className={`w-full rounded py-2 bg-zinc-900 h-full pr-12 placeholder-zinc-700 text-white mb-5 pl-12 outline-none`}
                placeholder="Message ..."
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-6 flex items-center"></div>
              <div className="absolute inset-y-0 left-6 flex items-center"></div>
            </div>
          </footer>
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <h2 className="text-3xl">Center</h2>
        </div>
      )}
    </div>
  );
};

export default ChatBox;