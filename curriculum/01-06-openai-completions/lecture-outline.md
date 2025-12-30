# Openai Completions


---

## Concepts & Theory

# OpenAI APIs — Completions
## Explain


---

## Demo Objective

The instructor will demonstrate how to:

- Create a basic completion request.
- Control output using prompt structure.
- Enforce formatting rules.
- Compare weak and strong prompts.

---

## Demo Setup

Requirements:

- OpenAI API key.
- Node.js environment.
- Simple JavaScript script.

---

## Instructor Walkthrough

### Step 1: Naive Prompt

The instructor will:
- Send a vague prompt.
- Show inconsistent output.
- Highlight ambiguity.

Discussion:
Why the model failed.

---

### Step 2: Structured Prompt

The instructor will:
- Add explicit instructions.
- Define output format.
- Limit response scope.

Students will compare results side by side.

---

### Step 3: Deterministic Behavior

The instructor will:
- Adjust temperature and max tokens.
- Show how constraints affect reliability.

---

## Demo Observations

- Models follow instructions literally.
- Ambiguity produces variability.
- Formatting rules matter more than tone.

---

## Demo Takeaways

- Completions reward clarity.
- You must specify the contract.
- Validation is your responsibility.

---

## Code Along

* Build a text generator with constraints.

# OpenAI APIs — Completions
## Imitate (Guided Code-Along)


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

---

## Practice Exercise

Create a policy-compliant response generator.

# OpenAI APIs — Completions
## Practice


---

## Independent Challenge

Students will:

- Build a completion-based generator for a real use case.
- Enforce a strict output format.
- Handle at least one failure scenario.

---

## Requirements

Each submission must include:

- The prompt used.
- The expected output schema.
- Validation logic.
- Example successful output.

---

## Stretch Goals (Optional)

- Add retries with modified prompts.
- Compare outputs at different temperatures.
- Chain completions together.

---

## Reflection Questions

Students should be able to answer:

- When should completions be avoided?
- What caused output failures?
- How does validation improve reliability?
- How would this scale in production?

---

## Practice Takeaways

- Completions are powerful but sharp.
- Structure turns risk into reliability.
- This API teaches disciplined prompting.