* Build a text generator with constraints.

# OpenAI APIs — Completions
## Imitate (Guided Code-Along)

### Lesson Duration
45 minutes

---

## Goal

Students will build a **structured text generation tool** using the Completions API.

---

## Project Overview

The tool will:

- Accept user input.
- Generate a structured response.
- Enforce a consistent output format.

Example use cases:
- Policy summaries.
- Code snippets.
- Product descriptions.

---

## Step 1: Input Design

Students will define:

- The input text.
- The desired output format.
- Constraints on length and style.

Instructor emphasis:
- Outputs must be machine-readable.

---

## Step 2: Prompt Construction

Students will:

- Write an instruction-first prompt.
- Include formatting rules.
- Add examples if needed.

Discussion:
- Why examples anchor behavior.

---

## Step 3: API Call

Students will:

- Send the completion request.
- Capture the response.
- Log raw vs parsed output.

Instructor checkpoints:
- Correct parsing.
- Handling missing fields.

---

## Step 4: Validation

Students will:

- Validate output structure.
- Handle malformed responses.
- Retry or fail gracefully.

---

## Imitation Takeaways

- Completions behave like functions.
- Inputs define outputs.
- Guardrails are mandatory.
