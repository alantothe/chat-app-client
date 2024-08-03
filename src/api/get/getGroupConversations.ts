import apiConfig from "../apiconfig";

export default async function getConversationsGroup(_id: string) {
  const { baseURL } = apiConfig;
  try {
    const response = await fetch(`${baseURL}/conversation/all/group/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
