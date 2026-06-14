import express from "express";
import Thread from "../models/Thread.js";
import { GoogleGenerativeAI, GoogleGenerativeAIResponseError } from "@google/generative-ai";

const router = express.Router();

//test
router.post("/chat", async (req, res) => {
try{
   
    const thread = new Thread({
        threadId : "abc",
        title : "testing new thread 2"
    });
    const response = await thread.save();
    res.send(response);
} catch (error) {
    console.error("Error saving thread:", error);
    res.status(500).json({ error: "Failed to save thread" });
}
});

// get all threds
router.get("/threads", async (req, res) => {
    try {
        const threads = await Thread.find({}).sort({ UpdatedAt: -1 }); // Sort by UpdatedAt in descending order
        //desending order of updatedAt // most recent thread first
        res.json(threads);
    } catch (error) {
        console.log("Error fetching threads:", error);
        res.status(500).json({ error: "Failed to fetch threads" });
    }
});

//
router.get("/threads/:threadId", async (req, res) => {
    const { threadId } = req.params;

    try{
        const thread = await Thread.findOne({ threadId });

        if(!thread){
            res.status(404).json({ error: "Thread not found" });
        }

        res.json(thread.messages);

    }catch(error){
        console.log("Error fetching thread:", error);
        res.status(500).json({ error: "Failed to fetch thread" });
    }
});

router.delete("/threads/:threadId", async (req, res) => {
    const { threadId } = req.params;

    try {
        const deleteeThread = await Thread.findOneAndDelete({ threadId });

        if (!deleteeThread) {
            res.status(404).json({ error: "Thread not found" });
        }

        res.status(200).json({ message: "Thread deleted successfully" });
    } catch (error) {
        console.log("Error deleting thread:", error);
        res.status(500).json({ error: "Failed to delete thread" });
    }
});

router.post("/chat",async (req, res) => {
    const { threadId, message } = req.body;

    if(!threadId || !message){
      res.status(400).json({ error: "threadId and message are required" });
    }

    try{
          const thread = await Thread.findOne({threadId});

          if(!thread){
            //create new thread
            thread = new Thread ({
                threadId,
                title : message,
                messages : [{role : "user " , content : message}]
            });
          }else{
            thread.messages.push({role : "user " , content : message})
          }
          const assistantReply = GoogleGenerativeAIResponse(message);

          thread.message.push({role : "user " , content : message});
    }
    catch(error){
        console.log("error");
    }
    

});
export default router;