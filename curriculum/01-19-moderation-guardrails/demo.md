* Moderation API usage.

# Safety & Guardrails — OpenAI Moderation API and Amazon Bedrock Guardrails
## Demonstrate

### Lesson Duration
15 minutes

---

## Demo Objective

The instructor will demonstrate how to:

- Use the OpenAI Moderation API.
- Configure Bedrock Guardrails.
- Enforce safety constraints in responses.
- Observe how unsafe content is handled.

---

## Demo Setup

Requirements:

- OpenAI API key.
- AWS account with Bedrock access.
- Sample unsafe and borderline inputs.

---

## Instructor Walkthrough

### Step 1: Moderation Classification

The instructor will:
- Submit text to the Moderation API.
- Review category scores.
- Decide pass, block, or escalate.

---

### Step 2: Guardrail Configuration

The instructor will:
- Define restricted topics.
- Configure response shaping.
- Enable filtering rules.

---

### Step 3: End-to-End Flow

The instructor will:
- Process user input.
- Apply moderation.
- Generate guarded output.

---

## Demo Observations

- Moderation flags risk.
- Guardrails shape output.
- Unsafe inputs require deterministic handling.

---

## Demo Takeaways

- Safety is layered.
- Detection and prevention differ.
- Fail-closed beats fail-open.
