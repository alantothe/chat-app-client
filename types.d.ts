
//Redux Initial State
export interface UserState {
  _id: string | null
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  email: string | null;
  password: string | null;
  status: string | null;
  bio: string | null;
  backgroundImage: string | null;
  friends: string[];
  activeConversations: string[];
  activeGroupConversations: string[];
  openConversation: string | null;
}
//Decoded Token(Dashboard Page)
export interface Token {
  avatar: string;
  exp: number;
  iat: number;
  _id: string;
}

//MainSideBar.tsx
export interface Conversation {
  detailedLastMessageFrom: {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    id: string;
  };
  _id: string | null;
  members: string[];
  lastMessage: string | null;
  lastMessageFrom: string | null;
  unreadCount: {
    [key: string]: number;
  };
}
//tokenSlice.ts
export interface LoginResponse {
  token: string | null;
}
//userApi.ts
export interface onOpenChatResponse{
  message: string | null
  data: string | null
}
//reset later?
// interface MainSideBarProps {
//   onOpenChat: () => void;
// }
//MainSideBar.tsx
export interface Chat {
  conversationId: string | null | "";
  _id: string | null ;
}



//ChatBox.tsx
export interface User {
  _id: string
  firstName: string;
  lastName: string;
  avatar: string;
  id: string;
}

//ChatBox.tsx
export interface MessageType {
  _id: string
  conversationId: string 
  senderId: User 
  message: string
  img: string[] 
  timestamp: string; 
  __v: number;
}

//ChatBox.tsx
export interface Response {
  members: User[] 
  messages: MessageType[]
}

//ChatBox.tsx
export interface MessageBody {
  recipientIds: string[] | null
  senderId: string | null
  message: string
  img:string[] | null
}

//Friends.tsx
export interface Friend {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio?: string;
  email?: string;
  backgroundImage?: string;
}

// post/sendMessage.ts

export interface SendMessageResponse {
  success: boolean;
  message: string;
}

export interface MessageBody {
  recipientIds: string[] | null
  senderId: string | null
  message: string
  img:string[] | null
}