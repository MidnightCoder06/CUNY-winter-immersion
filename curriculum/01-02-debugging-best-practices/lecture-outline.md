# Debugging Best Practices



---

## Concepts & Theory

# Debugging Best Practices
## Explain


---

## Demo Objective

The instructor will demonstrate how to:

- Read logs effectively.
- Interpret error messages.
- Narrow down root causes.
- Apply different approaches for local vs production issues.

---

## Demo Setup

Requirements:

- A sample application with known bugs.
- Access to logs and error output.
- A basic monitoring or logging interface.

---

## Instructor Walkthrough

### Step 1: Reproducing a Bug (Local)

The instructor will:

- Trigger a known failure.
- Show how to reproduce it reliably.
- Inspect stack traces and logs.

Focus:
- Understanding what failed first.

---

### Step 2: Production Scenario

The instructor will simulate an on-call incident:

- Partial information.
- Failing requests.
- User-reported symptoms.

Focus:
- Stabilizing the system.
- Rolling back or mitigating risk.

---

## Debugging Techniques Demonstrated

- Binary search through code paths.
- Logging critical checkpoints.
- Checking assumptions against data.
- Using timestamps and correlation IDs.

---

## Demo Observations

- Logs tell stories.
- The first error matters most.
- Symptoms are not causes.

---

## Demo Takeaways

- Debugging starts with observation.
- Production debugging favors safety.
- Method beats intuition.

---

## Code Along

* Debug a broken API integration.

* Identify root cause.

# Debugging Best Practices
## Imitate (Guided Do-Along)


---

## Goal

Students will practice **systematic debugging** in controlled scenarios.

---

## Exercise Overview

Students will be given:

- A small application with multiple issues.
- Limited documentation.
- Logs and error output.

They must diagnose and resolve issues step by step.

---

## Step 1: Issue Identification

Students will:

- Run the application.
- Observe failures.
- Record symptoms before acting.

Instructor emphasis:
- Do not change anything yet.

---

## Step 2: Hypothesis Formation

Students will:

- Identify possible causes.
- Rank hypotheses by likelihood.
- Choose one path to investigate.

Discussion:
- Why guessing wastes time.

---

## Step 3: Controlled Testing

Students will:

- Change one variable at a time.
- Add temporary logging if needed.
- Validate or eliminate hypotheses.

---

## Step 4: Resolution

Students will:

- Implement the fix.
- Verify the issue is resolved.
- Remove debug artifacts.

---

## Imitation Takeaways

- Discipline speeds debugging.
- Random changes increase chaos.
- Clear notes prevent loops.

---

## Practice Exercise

Write a debugging checklist for AI apps.

# Debugging Best Practices
## Practice


---

## Independent Challenge

Students will:

- Debug a new issue without instructor guidance.
- Document each step taken.
- Identify the root cause clearly.

---

## Requirements

Each submission must include:

- The observed symptoms.
- The debugging steps taken.
- The final root cause.
- The resolution.

---

## Stretch Goals (Optional)

- Write a postmortem summary.
- Propose monitoring improvements.
- Identify how the bug could have been prevented.

---

## Reflection Questions

Students should be able to answer:

- What information mattered most?
- What assumptions were wrong?
- How would this feel during an on-call incident?
- How can systems be designed to fail safer?

---

## Practice Takeaways

- Debugging is repeatable.
- Calm systems create calm engineers.
- Documentation is part of fixing the bug.