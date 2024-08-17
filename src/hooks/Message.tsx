import React from "react";
import Avatar from "./Avatar";




interface MessageProps {
  message: {
    senderId: {
      avatar: string;
      firstName: string;
      lastName: string;
    };
    message: string;
    img: string[];
    timestamp: string; 
  };
}
const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="flex  mb-4">
      <Avatar size="md" url={message.senderId.avatar} />
      <div className="ml-4">
        <h1 className="text-lg">{`${message.senderId.firstName} ${message.senderId.lastName}`}</h1>
        <p className="text-sm">{message.message}</p>
        <div>
          {message.img.map((img, index) => (
            <img key={index} src={img}
            alt="img"
            className="w-24 h-24 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Message;
