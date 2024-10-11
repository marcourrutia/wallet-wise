export const sendPrompt = async (prompt) => {
  try {
    console.log("se hace solicitud a api chat gpt", prompt);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY_CHAT_GPT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a financial advisor expert, specialized in providing concise and practical advice based on the user's financial data.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 100,
      }),
    });
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error al conectar con OpenAI:", error);
  }
};
