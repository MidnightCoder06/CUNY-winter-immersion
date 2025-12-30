# Llamaindex Llamaparse


---

## Concepts & Theory

# LlamaIndex — Document Indexing and Retrieval
## Explain


---

## Demo Objective

The instructor will demonstrate how to:

- Ingest documents using LlamaIndex.
- Parse files with LlamaParse.
- Build an index.
- Query documents using natural language.

---

## Demo Setup

Requirements:

- OpenAI or compatible LLM API key.
- LlamaIndex installed.
- Sample PDF or text documents.

---

## Instructor Walkthrough

### Step 1: Document Ingestion

The instructor will:
- Load documents into LlamaIndex.
- Show raw vs processed text.

Key point:
Ingestion quality controls retrieval quality.

---

### Step 2: Parsing with LlamaParse

The instructor will:
- Parse a PDF using LlamaParse.
- Show structured output.
- Highlight layout preservation.

Discussion:
Why naive PDF parsing fails.

---

### Step 3: Index Creation

The instructor will:
- Build an index from parsed documents.
- Explain index types at a high level.

---

### Step 4: Querying

The instructor will:
- Ask natural language questions.
- Retrieve relevant chunks.
- Show how context is assembled.

---

## Demo Observations

- Cleaner inputs produce better answers.
- Index structure matters.
- Retrieval is deterministic.

---

## Demo Takeaways

- LlamaIndex reduces boilerplate.
- Parsing is a critical step.
- Retrieval logic should be explicit.

---

## Code Along

* Build a Q&A system over documents.

# LlamaIndex — Document Indexing and Retrieval
## Imitate (Guided Code-Along)


---

## Goal

Students will build a **document-based Q&A system** using LlamaIndex.

---

## Project Overview

The system will:

- Ingest one or more documents.
- Parse them with LlamaParse.
- Create an index.
- Answer questions using retrieved context.

---

## Step 1: Document Selection

Students will:
- Choose a document (PDF or text).
- Identify its structure.
- Predict retrieval challenges.

Instructor emphasis:
Not all documents chunk equally.

---

## Step 2: Parsing

Students will:
- Parse documents using LlamaParse.
- Inspect structured output.
- Identify sections and headings.

Discussion:
Why structure matters more than volume.

---

## Step 3: Index Construction

Students will:
- Create an index.
- Configure chunk sizes.
- Attach metadata.

Instructor checkpoints:
- Chunk coherence.
- Source traceability.

---

## Step 4: Query Pipeline

Students will:
- Accept user questions.
- Retrieve relevant chunks.
- Generate responses using context.

---

## Step 5: Evaluation

Students will test:
- Relevant queries.
- Edge cases.
- Irrelevant questions.

---

## Imitation Takeaways

- RAG quality is engineering quality.
- Abstractions save time, not thinking.
- Good retrieval beats clever prompting.

---

## Practice Exercise

Create a research assistant for a niche topic.

# LlamaIndex — Document Indexing and Retrieval
## Practice


---

## Independent Challenge

Students will:

- Build a Q&A system over a multi-page document.
- Ask at least five questions.
- Evaluate relevance and accuracy.

---

## Requirements

Each submission must include:

- The source document.
- Index configuration choices.
- Example queries and results.
- Notes on failure cases.

---

## Stretch Goals (Optional)

- Compare two chunk sizes.
- Add metadata filtering.
- Swap LLM providers.

---

## Reflection Questions

Students should be able to answer:

- Where did retrieval succeed?
- Where did it fail?
- How did parsing affect results?
- What would break at scale?

---

## Practice Takeaways

- Retrieval systems live or die on structure.
- Parsing is not optional.
- This pattern underpins enterprise AI.