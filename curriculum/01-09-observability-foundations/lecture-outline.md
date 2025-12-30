# Observability Foundations


---

## Concepts & Theory

# Observability Foundations
## Explain


---

## Demo Objective

The instructor will demonstrate how to:

- View logs and metrics in AWS CloudWatch.
- Understand basic trace flows.
- Query log data using Athena.
- Correlate signals to diagnose issues.

---

## Demo Setup

Requirements:

- AWS account.
- Sample application producing logs.
- CloudWatch access.
- Athena configured.

---

## Instructor Walkthrough

### Step 1: Logs in CloudWatch

The instructor will:
- Navigate log groups.
- Inspect log entries.
- Identify timestamps and severity.

Key point:
Logs must be readable to be useful.

---

### Step 2: Metrics Overview

The instructor will:
- View CPU, memory, and request metrics.
- Identify normal vs abnormal behavior.

Discussion:
Why baselines matter.

---

### Step 3: Traces (Conceptual)

The instructor will:
- Walk through a trace diagram.
- Show how latency accumulates across services.

---

### Step 4: Athena Querying

The instructor will:
- Run basic Athena queries.
- Filter logs by time and error type.
- Extract patterns from large log sets.

---

## Demo Observations

- Single signals mislead.
- Correlation reveals causes.
- Queries turn logs into insight.

---

## Demo Takeaways

- Observability is investigative.
- Queries are as important as dashboards.
- Insight beats alerts.

---

## Code Along

* Query logs with Athena.

# Observability Foundations
## Imitate (Guided Do-Along)


---

## Goal

Students will practice **observability analysis** using logs and metrics.

---

## Exercise Overview

Students will:

- Explore CloudWatch logs.
- Identify performance anomalies.
- Correlate metrics with log data.
- Answer diagnostic questions.

---

## Step 1: Log Exploration

Students will:
- Locate log groups.
- Identify key fields.
- Filter by time and severity.

Instructor emphasis:
Read logs before querying.

---

## Step 2: Metric Analysis

Students will:
- Examine latency and error rates.
- Identify spikes and trends.

Discussion:
What does “normal” look like?

---

## Step 3: Correlation

Students will:
- Match metric anomalies to log events.
- Identify probable causes.

---

## Step 4: Athena Queries

Students will:
- Write basic queries.
- Aggregate errors.
- Identify common failure paths.

---

## Imitation Takeaways

- Observability is correlation.
- Metrics guide investigation.
- Logs explain behavior.

---

## Practice Exercise

Design an observability plan for an AI service.

# Observability Foundations
## Practice


---

## Independent Challenge

Students will:

- Investigate a simulated system issue.
- Use logs and metrics to diagnose the problem.
- Provide a clear explanation of findings.

---

## Requirements

Each submission must include:

- The observed symptoms.
- Logs or metrics used.
- The identified root cause.
- A recommended fix.

---

## Stretch Goals (Optional)

- Propose a new metric.
- Suggest log improvements.
- Design a basic alerting rule.

---

## Reflection Questions

Students should be able to answer:

- Which signal mattered most?
- What information was missing?
- How could observability be improved?
- How does this change on-call behavior?

---

## Practice Takeaways

- Observability enables understanding.
- Systems fail in patterns.
- Visibility reduces stress and downtime.