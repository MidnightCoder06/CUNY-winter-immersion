* Build a mini document search app.

* Use embeddings + vectors.

# OpenAI APIs — Files, Vector Stores, and Embeddings
## Imitate (Guided Code-Along)

### Lesson Duration
45 minutes

---

## Goal

Students will build a **basic semantic search system** using embeddings.

---

## Project Overview

The system will:

- Accept text documents.
- Convert them into embeddings.
- Store them in a vector store.
- Answer semantic queries.

---

## Step 1: Data Preparation

Students will:

- Choose a document.
- Break it into chunks.
- Normalize formatting.

Instructor emphasis:
- Chunking strategy matters.

---

## Step 2: Embedding Generation

Students will:

- Generate embeddings for each chunk.
- Store vectors with metadata.
- Inspect vector dimensions.

Discussion:
- Why embeddings are consistent in size.
- Why preprocessing matters.

---

## Step 3: Vector Storage

Students will:

- Store embeddings locally or in a simple vector store.
- Associate source references.

Instructor checkpoints:
- Correct storage.
- Traceability back to source text.

---

## Step 4: Semantic Search

Students will:

- Accept a query.
- Embed the query.
- Compare similarity scores.
- Return top results.

---

## Step 5: Interpretation

Students will evaluate:
- Result relevance.
- False positives.
- Missing context.

---

## Imitation Takeaways

- Retrieval systems are deterministic.
- Embeddings encode intent.
- This is infrastructure, not magic.
