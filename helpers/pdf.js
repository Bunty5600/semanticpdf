import fs from "fs";
import pdf from "pdf-parse/lib/pdf-parse.js";

const extractTextFromPDF = async (filePath) => {
    const dataBuffer = fs.readFileSync(filePath);

    const data = await pdf(dataBuffer);

    return data.text;
};

export default extractTextFromPDF;