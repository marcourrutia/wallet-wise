export const sendPrompt = async (prompt) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY_CHAT_GPT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Eres un asesor financiero experto, especializado en ofrecer consejos breves y prácticos basados en los datos financieros del usuario.",
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
