import express from "express";
import upload from "../helpers/upload.js";
import extractTextFromPDF from "../helpers/pdf.js";
import chunkText from "../helpers/chunk.js";
import createEmbedding from "../helpers/embed.js";
import index from "../helpers/pinecone.js";

const router = express.Router();

router.post("/", upload.single("pdf"), async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF uploaded",
            });
        }

        const filePath = req.file.path;

        const text = await extractTextFromPDF(filePath);

        const chunks = await chunkText(text);

        let storedChunks = 0;

        for (let i = 0; i < chunks.length; i++) {

            const chunk = chunks[i].pageContent;

            try {

                const embedding = await createEmbedding(chunk);
                console.log(Array.isArray(embedding));

                console.log(typeof embedding[0]);

                console.log(embedding.slice(0, 5));


                console.log("index type:", typeof index);
                console.log("index.upsert type:", typeof index.upsert);
                console.log("index.namespace type:", typeof index.namespace);

                const ns = index.namespace("__default__");
                console.log("ns type:", typeof ns);
                console.log("ns.upsert type:", typeof ns.upsert);

                console.log({
                    chunk: i,
                    embeddingLength: embedding.length,
                });

                const testVector = [{
                    id: "test-1",
                    values: Array.from(embedding),
                    metadata: { text: "test" }
                }];

                console.log("Is array:", Array.isArray(testVector));
                console.log("Length:", testVector.length);
                console.log("First item:", JSON.stringify(testVector[0]).substring(0, 100));
                await index.namespace("__default__").upsert({
                    records: [{
                        id: `chunk-${i}`,
                        values: embedding,
                        metadata: { text: chunk }
                    }]
                });
                console.log(`SUCCESSFULLY STORED CHUNK ${i}`);

                storedChunks++;

                await new Promise(resolve =>
                    setTimeout(resolve, 1000)
                );

            } catch (err) {

                console.log(`FAILED CHUNK ${i}`);

                console.log(err.message);
            }
        }

        return res.json({
            success: true,
            totalChunks: chunks.length,
            storedChunks,
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;