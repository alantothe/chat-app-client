import { io } from "socket.io-client";
import apiConfig from "@/api/apiconfig";

const {localURL, socketURL} = apiConfig

const socket = io(`${localURL}`, {
  reconnectionAttempts: 1,
});

socket.on("connect", () => {
  console.log("connected to the server with id:", socket.id);
});

socket.on("connect_error", (error) => {
  console.log("Error connecting to server:", error.message);
});
export default socket;
