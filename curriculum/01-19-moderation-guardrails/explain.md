# Safety & Guardrails — OpenAI Moderation API and Amazon Bedrock Guardrails
## Explain

### Lesson Duration
10–15 minutes

---

## Terminal Objectives (SWBAT)

By the end of this section, students will be able to:

- Explain why safety and guardrails are required in AI systems.
- Describe how the OpenAI Moderation API works.
- Explain the purpose of Amazon Bedrock Guardrails.
- Identify risks associated with unguarded AI deployments.

---

## Why Safety Exists in AI Systems

AI systems generate language that can:
- Be incorrect.
- Be harmful.
- Violate policy.
- Create legal exposure.

Safety is not censorship.  
Safety is **risk management**.

---

## OpenAI Moderation API

The Moderation API classifies content into categories such as:
- Violence
- Hate
- Sexual content
- Self-harm
- Harassment

It allows systems to:
- Block content.
- Flag content.
- Route content for review.

Moderation is classification, not judgment.

---

## Amazon Bedrock Guardrails

Bedrock Guardrails enforce:
- Topic restrictions.
- Tone constraints.
- Output filters.
- Response shaping.

Guardrails operate **before and after generation**.

They are preventative, not reactive.

---

## Why Use Both?

Moderation APIs detect risk.  
Guardrails prevent exposure.

Together they:
- Reduce hallucinations.
- Prevent policy violations.
- Protect users and businesses.

---

## Common Use Cases

- Customer-facing agents.
- Healthcare or finance tools.
- Education platforms.
- Enterprise copilots.

---

## Mental Model

Moderation asks:
“Is this allowed?”

Guardrails ask:
“What is safe to say?”

---

## Key Takeaways

- Safety is architectural.
- Guardrails protect trust.
- Compliance enables scale.
