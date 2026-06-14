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
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      options
    );
    const data = await response.json();
    const reply = data.candidates[0].content.parts[0].text;
    console.log(reply);
    return reply; // ✅ sirf return karo
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default getGeminiaiResponse;