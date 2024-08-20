const baseURL = process.env.NEXT_PUBLIC_CHAT_API_SERVER;
const local = "http://localhost:4001/api"

const apiConfig = {
  baseURL: baseURL,
  local: local
};

export default apiConfig;
