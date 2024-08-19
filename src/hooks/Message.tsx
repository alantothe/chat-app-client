import React from "react";
import Avatar from "./Avatar";

interface MessageProps {
  message: {
    senderId: {
  _id: string 
  firstName: string;
  lastName: string;
  avatar: string;
  id: string;
    } 
    message: string;
    img: string[] | string | null;
    timestamp: string;
  };
}
interface User {
  _id: string | null
  firstName: string;
  lastName: string;
  avatar: string;
  id: string;
}
const Message: React.FC<MessageProps> = ({ message }) => {
  // true map, false = []
  const images = Array.isArray(message.img) ? message.img : message.img ? [message.img] : [];
  //case where senderId is null
  const sender = message.senderId || null
  return (
    <div className="flex mb-4">
      <Avatar size="md" url={sender.avatar} />
      <div className="ml-4">
      <h1 className="text-lg">{`${sender.firstName} ${sender.lastName}`}</h1>
      <p className="text-sm">{message.message}</p>
        <div>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="img"
              className="w-24 h-24 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
