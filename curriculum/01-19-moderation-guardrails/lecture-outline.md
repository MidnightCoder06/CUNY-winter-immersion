# Moderation Guardrails


---

## Concepts & Theory

# Safety & Guardrails — OpenAI Moderation API and Amazon Bedrock Guardrails
## Explain


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

---

## Code Along

* Filter unsafe outputs.

# Safety & Guardrails — OpenAI Moderation API and Amazon Bedrock Guardrails
## Imitate (Guided Do-Along)


---

## Goal

Students will implement **basic safety controls** for an AI system.

---

## Project Overview

The system will:

- Accept user input.
- Run moderation checks.
- Apply guardrails.
- Return safe responses or escalation messages.

---

## Step 1: Threat Modeling

Students will identify:

- Who uses the system.
- What content is risky.
- What must be blocked or redirected.

Instructor emphasis:
Design for worst-case users.

---

## Step 2: Moderation Integration

Students will:
- Send inputs to the Moderation API.
- Interpret scores.
- Define thresholds.

---

## Step 3: Guardrail Rules

Students will:
- Configure allowed and disallowed topics.
- Shape response tone.
- Prevent unsafe outputs.

---

## Step 4: Testing

Students will:
- Test safe inputs.
- Test unsafe inputs.
- Verify correct handling.

---

## Imitation Takeaways

- Safety is intentional.
- Defaults matter.
- Testing is non-negotiable.

---

## Practice Exercise

Design a safety policy for an AI app.

# Safety & Guardrails — OpenAI Moderation API and Amazon Bedrock Guardrails
## Practice


---

## Independent Challenge

Students will:

- Design a safety policy for an AI agent.
- Implement moderation checks.
- Demonstrate correct handling of unsafe inputs.

---

## Requirements

Each submission must include:

- A safety policy outline.
- Moderation thresholds.
- Guardrail rules.
- Example inputs and outputs.

---

## Stretch Goals (Optional)

- Add human review routing.
- Log safety events.
- Create a compliance checklist.

---

## Reflection Questions

Students should be able to answer:

- What risks were hardest to mitigate?
- Where could moderation fail?
- How do guardrails affect UX?
- What tradeoffs exist between safety and usefulness?

---

## Practice Takeaways

- Safety enables trust.
- Guardrails are design choices.
- Responsible AI scales better.