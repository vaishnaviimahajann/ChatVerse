import express from "express";
import "dotenv/config";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/api/chat", chatRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});

const connectDB = async () => {
          try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("Connected to MongoDB");
          } catch (error) {
            console.error("Error connecting to MongoDB:", error);
          }
}

// app.post("/api/chat", async (req, res) => {
//    const { message } = req.body;
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "x-goog-api-key": process.env.GEMINI_API_KEY,
//     },
//     body: JSON.stringify({
//       contents: [
//         {
//           role: "user",
//            parts: [{ text: message }],
//         },
//       ],
//     }),
//   };

//  try {
//     const response = await fetch(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
//       options
//     );
//     const data = await response.json();
//     //const reply = data.candidates[0].content.parts[0].text;
//     console.log(reply); // terminal 
//     res.json({ message: reply }); // frontend la janar
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

