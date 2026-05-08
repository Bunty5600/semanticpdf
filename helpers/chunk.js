import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const chunkText = async (text) => {

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 2000,
        chunkOverlap: 200,
    });

    const chunks = await splitter.createDocuments([text]);

    return chunks;
};

export default chunkText;