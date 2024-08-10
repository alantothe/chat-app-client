export interface UserState {
  _id: string | null;
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

export interface Token {
  avatar: string;
  exp: number;
  iat: number;
  _id: string;
}
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

export interface LoginResponse {
  token: string | null;
}

interface MainSideBarProps {
  onOpenChat: () => void;
}
