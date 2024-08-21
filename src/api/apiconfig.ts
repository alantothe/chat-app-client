const baseURL = process.env.NEXT_PUBLIC_CHAT_API_SERVER;
const socketURL = process.env.NEXT_PUBLIC_SOCKET_URL; 
const localURL = process.env.NEXT_PUBLIC_LOCAL_SOCKET;

const apiConfig = {
  baseURL: baseURL,
  socketURL: socketURL,
  localURL: localURL
};

export default apiConfig;
