import "dotenv/config";

const getGeminiaiResponse = async (message) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    }),
  };

  try {
  const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
  options
);
    const data = await response.json();

    if (!data.candidates || !data.candidates[0]) {
      return "Sorry, I couldn't generate a response. Please try again.";
    }

    const reply = data.candidates[0].content.parts[0].text;
    return reply;

  } catch (err) {
    console.error(err);
    return "Something went wrong while generating response.";
  }
};

export default getGeminiaiResponse;