# SemanticPDF AI

AI-powered Semantic PDF Chat application using Gemini Embeddings, Pinecone Vector Database, and Retrieval-Augmented Generation (RAG).

## Overview

SemanticPDF AI allows users to upload PDF documents, process them into semantic embeddings, store vectors in Pinecone, and perform intelligent AI-powered question answering over uploaded documents.

The system uses:
- PDF text extraction
- LangChain chunking
- Gemini embedding generation
- Pinecone vector storage
- Retrieval-Augmented Generation (RAG)

---

# Features

- PDF Upload
- PDF Text Extraction
- Smart Text Chunking
- Gemini Embeddings
- Pinecone Vector Storage
- Semantic Search
- AI-powered Question Answering
- Retrieval-Augmented Generation (RAG)

---

# Tech Stack

## Backend
- Node.js
- Express.js

## AI & ML
- Google Gemini API
- Gemini Embedding Model
- LangChain Text Splitters

## Vector Database
- Pinecone

## File Processing
- Multer
- PDF-Parse

---

# Project Architecture

```text
PDF Upload
    ↓
PDF Text Extraction
    ↓
LangChain Chunking
    ↓
Gemini Embeddings
    ↓
Pinecone Vector Database
    ↓
Semantic Retrieval
    ↓
Gemini AI Response
```

---

# Folder Structure

SemanticPDF/
│
├── backend/
│   │
│   ├── helpers/
│   │   │
│   │   ├── upload.js
│   │   ├── pdf.js
│   │   ├── chunk.js
│   │   ├── gemini.js
│   │   ├── embed.js
│   │   ├── pinecone.js
│   │   ├── search.js
│   │   └── answer.js
│   │
│   ├── routes/
│   │   │
│   │   ├── upload.js
│   │   └── chat.js
│   │
│   ├── uploads/
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── requirements.txt
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   ├── Navbar.jsx
│   │   │   ├── UploadBox.jsx
│   │   │   ├── ChatBox.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── PDFCard.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   │
│   │   │   ├── Home.jsx
│   │   │   ├── Upload.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── README.md
├── LICENSE
└── docker-compose.yml
```

---

# Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX=semanticpdf
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Bunty5600/semanticpdf.git
```

## Install Dependencies

```bash
npm install
```

## Run Server

```bash
npm run dev
```

---

# API Endpoints

## Upload PDF

```http
POST /upload
```

### Form Data

| Key | Type |
|-----|------|
| pdf | File |

---

## Chat with PDF

```http
POST /chat
```

### Request Body

```json
{
  "question": "What is RAG?"
}
```

---

# AI Pipeline

## 1. PDF Parsing

Extract text from uploaded PDF using `pdf-parse`.

## 2. Chunking

Split extracted text into semantic chunks using LangChain text splitters.

## 3. Embedding Generation

Generate vector embeddings using Gemini Embedding API.

## 4. Vector Storage

Store embeddings inside Pinecone vector database.

## 5. Semantic Retrieval

Convert user question into embeddings and retrieve relevant chunks.

## 6. AI Response Generation

Use Gemini model with retrieved context to generate grounded answers.

---

# Future Improvements

- User Authentication
- Multiple PDF Support
- Chat History
- Frontend React UI
- Streaming Responses
- Document Summarization
- OCR Support
- Multi-user Namespaces
- Cloud Deployment

---

# Learning Outcomes

This project demonstrates:
- RAG Architecture
- Vector Databases
- Embedding Models
- Semantic Search
- AI Backend Engineering
- LLM Integration
- Production AI Pipelines

---

# Author

Bunty Bhainsa

---

# License

MIT License