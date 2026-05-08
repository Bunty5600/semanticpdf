// embed.js - rewrite using direct REST call with axios
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const createEmbedding = async (text) => {
    const cleanedText = text
        .replace(/\s+/g, " ")
        .replace(/[^\x20-\x7E]/g, "")
        .trim()
        .slice(0, 3000);

    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2:embedContent?key=${process.env.GEMINI_API_KEY}`,
        {
            model: "models/gemini-embedding-2",
            content: { parts: [{ text: cleanedText }] },
        }
    );

    return response.data.embedding.values;
};

export default createEmbedding;