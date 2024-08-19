import { useAppSelector } from "@/redux/hooks";
import getMessages from "@/api/get/getMessages";
import sendMessage from "@/api/post/sendMessage";
import React, { useEffect, useState } from "react";
import Avatar from "@/hooks/Avatar";
import Message from "@/hooks/Message";

interface User {
  _id: string
  firstName: string;
  lastName: string;
  avatar: string;
  id: string;
}
interface Message {
  _id: string
  conversationId: string 
  senderId: User 
  message: string
  img: string[] 
  timestamp: string; 
  __v: number;
}
interface Response {
  members: User[] 
  messages: Message[]
}
interface MessageBody {
  recipientIds: string[] | null
  senderId: string | null
  message: string
  img:string[] | null
}
const ChatBox: React.FC = () => {
  const userData = useAppSelector((state) => state.userReducer);
  const { _id, openConversation } = userData;
  const [data, setData] = useState<Response | null>(null);
  const [messageBody, setMessageBody] = useState<MessageBody>({
    recipientIds: null,
    senderId: userData?._id,
    message: '',
    img: null
  });

 
  useEffect(() => {
    if (openConversation) {
      getMessages(_id, openConversation)
        .then((data: Response) => {
          console.log(data);
          setData(data)
          const newArray = data?.members?.map((member) => member.id) || [];

          setMessageBody((prevMessage) => ({
            ...prevMessage,
            recipientIds: newArray 
          }));
        
          
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }, [openConversation]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageBody(prevMessage => ({
      ...prevMessage,                    // Spread the previous message state to retain other values
      message: e.target.value            // Update only the message part
    }));
    console.log(e.target.value  )
    console.log(messageBody)
  };


  const handleSubmit = () => {
    sendMessage(messageBody)
    .then(response => {
      console.log("Message sent successfully:", response);
    })
    .catch(error => {
      console.error("Error sending message:", error);
    });
  }
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
    <div className="flex items-center  p-4">
      {members ? (
        <header className="h-24 overflow-hidden relative flex-shrink-0">
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
          
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <h2 className="text-3xl">Center</h2>
        </div>
      )}
      <footer className="flex w-full px-5 justify-center flex-shrink-0 mb-5">
            <div className=" felx relative w-full px-3 h-12">
              <input
                name="message"
                className={`w-full rounded py-2 bg-zinc-900 h-full pr-12 placeholder-zinc-700 text-white mb-5 pl-12 outline-none`}
                placeholder="Message ..."
                autoComplete="off"
                onChange={handleInputChange}
              />
              <button onClick={handleSubmit}>
                Submit
              </button >
              <div className="absolute inset-y-0 right-6 flex items-center"></div>
              <div className="absolute inset-y-0 left-6 flex items-center"></div>
            </div>
      </footer>
    </div>
  );
};

export default ChatBox;