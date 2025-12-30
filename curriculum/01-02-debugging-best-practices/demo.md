* Read stack traces.

* Use logging effectively.
# Debugging Best Practices
## Demonstrate

### Lesson Duration
15 minutes

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
