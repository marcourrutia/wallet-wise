export const sendPrompt = async (instruction, prompt) => {
  try {
    const response = await fetch("http://localhost:5050/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ instruction, prompt }),
    });
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error al conectar con API:", error);
  }
};
