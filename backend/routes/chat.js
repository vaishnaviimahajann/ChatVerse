import express from "express";
import Thread from "../models/Thread.js";
import getGeminiaiResponse from "../utils/geminiai.js";
import { isValidMessage } from "../utils/validators.js";

const router = express.Router();

// get all threads
router.get("/threads", async (req, res) => {
    try {
        const threads = await Thread.find({}).sort({ UpdatedAt: -1 });
        res.json(threads);
    } catch (error) {
        console.log("Error fetching threads:", error);
        res.status(500).json({ error: "Failed to fetch threads" });
    }
});

// get single thread messages
router.get("/threads/:threadId", async (req, res) => {
    const { threadId } = req.params;

    try {
        const thread = await Thread.findOne({ threadId });

        if (!thread) {
            return res.status(404).json({ error: "Thread not found" });
        }

        res.json(thread.messages);

    } catch (error) {
        console.log("Error fetching thread:", error);
        res.status(500).json({ error: "Failed to fetch thread" });
    }
});

// delete thread
router.delete("/threads/:threadId", async (req, res) => {
    const { threadId } = req.params;

    try {
        const deletedThread = await Thread.findOneAndDelete({ threadId });

        if (!deletedThread) {
            return res.status(404).json({ error: "Thread not found" });
        }

        res.status(200).json({ message: "Thread deleted successfully" });

    } catch (error) {
        console.log("Error deleting thread:", error);
        res.status(500).json({ error: "Failed to delete thread" });
    }
});

// send message
router.post("/", async (req, res) => {
    const { threadId, message } = req.body;

    if (!isValidMessage(threadId, message)) {
        return res.status(400).json({ error: "threadId and message are required" });
    }
    try {
        let thread = await Thread.findOne({ threadId });

        if (!thread) {
            thread = new Thread({
                threadId,
                title: message,
                messages: [{ role: "user", content: message }]
            });
        } else {
            thread.messages.push({ role: "user", content: message });
        }

        const assistantReply = await getGeminiaiResponse(message);

        thread.messages.push({ role: "assistant", content: assistantReply });
        thread.UpdatedAt = new Date();

        await thread.save();
        res.json({ reply: assistantReply });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;