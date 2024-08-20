const baseURL = process.env.NEXT_PUBLIC_CHAT_API_SERVER;
const socketURL = process.env.SOCKET_URL
const localURL = process.env.LOCAL_SOCKET

const apiConfig = {
  baseURL: baseURL,
  socketURL: socketURL,
  localURL: localURL
};

export default apiConfig;
