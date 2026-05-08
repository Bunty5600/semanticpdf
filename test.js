// test-pinecone.js
import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";
dotenv.config();

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pinecone.index(process.env.PINECONE_INDEX);

const fakeEmbedding = [];
for (let i = 0; i < 3072; i++) fakeEmbedding.push(0.01);

try {
    await index.upsert({
        records: [{
            id: "test-1",
            values: fakeEmbedding,
            metadata: { text: "hello world" }
        }]
    });
    console.log("SUCCESS - check Pinecone dashboard!");
} catch (e) {
    console.log("ERROR:", e.message);
}