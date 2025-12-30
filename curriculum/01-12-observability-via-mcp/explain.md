# Observability via MCP
## Explain

### Lesson Duration
10–15 minutes

---

## Terminal Objectives (SWBAT)

By the end of this section, students will be able to:

- Explain what the Model Context Protocol (MCP) is.
- Describe how MCP servers extend AI systems with operational context.
- Explain how observability data can be accessed through MCP.
- Identify use cases for MCP in AI-driven operations.

---

## What Is MCP?

MCP (Model Context Protocol) is a standardized way for AI systems to access external tools, data, and services.

Think of MCP as a **universal adapter** between AI models and real systems.

Without MCP:
- Models reason in isolation.

With MCP:
- Models reason with live context.

---

## MCP Servers

An MCP server exposes a capability to an AI system.

Examples:
- Log querying
- Metrics inspection
- Cloud service introspection
- Internal tooling access

Each server defines:
- What tools exist
- What inputs they accept
- What outputs they return

---

## Why MCP Matters for Observability

Observability data is:
- Large
- Dynamic
- Time-sensitive

MCP allows AI agents to:
- Query logs on demand
- Inspect metrics programmatically
- Correlate signals automatically

This turns observability from dashboards into **reasoning inputs**.

---

## AWS CloudWatch MCP Server

The CloudWatch MCP server exposes:
- Logs
- Metrics
- Alarms

This allows AI systems to:
- Investigate incidents
- Answer operational questions
- Assist on-call engineers

---

## Mental Model

Dashboards are for humans.  
MCP servers are for **machines that reason**.

---

## Key Takeaways

- MCP connects AI to real systems.
- Observability becomes queryable context.
- This enables AI-assisted operations.

