import apiConfig from "../apiconfig";
import { SendMessageResponse, MessageBody } from "../../../types";


export default async function sendMessage(
    messageBody: MessageBody
  ): Promise<SendMessageResponse> {
    const { baseURL } = apiConfig;
    try {
      const response = await fetch(`${baseURL}/message/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageBody),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Fetch error: ${errorText}`);
        throw new Error(`Network response was not ok: ${errorText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error("Request failed:", error);
      throw error;
    }
  }

