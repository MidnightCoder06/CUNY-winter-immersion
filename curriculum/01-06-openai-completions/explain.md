# OpenAI APIs — Completions
## Explain

### Lesson Duration
10–15 minutes

---

## Terminal Objectives (SWBAT)

By the end of this section, students will be able to:

- Explain what completions are and how they differ from chat-based APIs.
- Describe how prompts influence completion behavior.
- Identify when completions are the right tool versus other OpenAI APIs.
- Explain common risks such as hallucination and prompt injection.

---

## What Are Completions?

Completions are direct text generation responses from a model given a prompt.  
You provide input text.  
The model continues it.

Think of completions as **raw generation**.

There is no built-in conversation state.  
There is no memory unless you supply it.

---

## What Do Completions Do Well?

Completions excel at:

- Structured text generation.
- Code generation.
- Summaries with strict formats.
- Deterministic-style outputs when constrained well.

They are simple.  
They are powerful.  
They are unforgiving.

---

## Why Use Completions Instead of Chat?

Completions are often preferred when:

- You need predictable formatting.
- You want full control over the prompt.
- You are generating code or config files.
- You are building pipelines instead of conversations.

Chat is friendly.  
Completions are precise.

---

## Risks and Limitations

Common risks include:

- Hallucinated facts.
- Overconfidence in responses.
- Prompt leakage.
- Inconsistent output formats.

These risks are managed with:
- Clear instructions.
- Output schemas.
- Validation layers.

---

## Mental Model

Chat models simulate dialogue.  
Completions simulate **continuation**.

You are not talking to the model.  
You are **programming its next move**.

---

## Key Takeaways

- Completions are low-level and flexible.
- Prompt design is critical.
- Structure reduces failure.
- This API is foundational to many systems.
