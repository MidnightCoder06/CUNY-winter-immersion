# Debugging Best Practices
## Explain

### Lesson Duration
10–15 minutes

---

## Terminal Objectives (SWBAT)

By the end of this section, students will be able to:

- Explain what debugging is in modern software systems.
- Describe the difference between day-to-day debugging and on-call debugging.
- Identify common failure modes in production systems.
- Apply a systematic approach to diagnosing issues.

---

## What Is Debugging?

Debugging is the process of identifying, isolating, and resolving defects in a system.

It is not guessing.  
It is controlled investigation.

Think of debugging as **forensic analysis for software**.

---

## Day-to-Day Debugging

Day-to-day debugging typically involves:

- Local development environments.
- Predictable inputs.
- Reproducible failures.
- Time to experiment.

The goal is correctness and clarity.

---

## On-Call Debugging

On-call debugging is different:

- Systems are live.
- Users are impacted.
- Information is incomplete.
- Time pressure exists.

The goal is stability first.  
Perfection comes later.

---

## Common Failure Categories

Most bugs fall into a few buckets:

- Configuration errors.
- Dependency issues.
- Invalid assumptions.
- Data shape mismatches.
- External service failures.

Understanding categories reduces panic.

---

## Debugging Mindset

Good debuggers:

- Start with observable facts.
- Change one variable at a time.
- Avoid assumptions.
- Document what they learn.

Emotion clouds diagnosis.  
Structure restores clarity.

---

## Key Takeaways

- Debugging is a skill, not a talent.
- On-call debugging prioritizes containment.
- Systems fail in patterns.
- Calm beats clever under pressure.
