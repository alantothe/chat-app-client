import apiConfig from "../apiconfig";

export default async function getLimitedUser(ids: string[]) {
  const { baseURL } = apiConfig;

  try {
    const response = await fetch(`${baseURL}/user/limited`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids }),
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
