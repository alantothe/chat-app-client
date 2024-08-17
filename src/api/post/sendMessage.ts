import apiConfig from "../apiconfig";

// http://localhost:4001/api/message/send

interface SendMessageResponse {
    success: boolean;
    message: string;
  }
 
export default async function sendMessage(
    recipientIds: string[] | null,
    senderId: string | null,
    img: string | string[] | null
  ): Promise<SendMessageResponse> {
    const { baseURL } = apiConfig;
    try {
      const response = await fetch(`${baseURL}/message/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientIds,
          senderId,
          img,
        }),
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

