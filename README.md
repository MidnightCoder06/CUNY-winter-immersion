Slides for each day will be uploaded to the `slides` folder at the root level of this repo

Both in in-class labs and homework for each day will be uploaded to the `assignments` folder at the root level of this repo

Lecture recordings for each day can be accessed by clicking the 📺 emoji next to each date

## To run locally
1. `npm install`
2. `npm run dev`
3. Click on a lesson to view the code sample we will be working with for the day

![Syllabus Home Page](public/syllabus-home-page.png)

## Course Syllabus

### January 2nd

* Gemini for AI Ad Creation
    * Veo3 via https://kie.ai/
    * Nano Banana via https://gemini.google.com/app
* Debugging Best Practices
* Objectives:
  * Explain what the Gemini API is and what problems it solves
  * Identify real-world use cases for AI-generated advertising
  * Explain what Veo3 is and how text-to-video models work at a high level
  * Explain what debugging is in modern software systems
  * Describe the difference between day-to-day debugging and on-call debugging
* Lecture outlines: [Gemini API](curriculum/01-02-gemini-api-ai-ad-creation/lecture-outline.md) | [Veo3](curriculum/01-02-veo3/lecture-outline.md) | [Nano Banana](curriculum/01-02-nano-banana/lecture-outline.md) | [Debugging](curriculum/01-02-debugging-best-practices/lecture-outline.md)
* Lecture recording: [📺](https://youtu.be/QcBWaeDZIm8)
* Why engineering jobs other swe are important to consider [📺](https://youtube.com/shorts/9YmDu8rrUNw)

### January 5th 

* OpenAI Moderation API: https://platform.openai.com/docs/guides/moderation
* Objectives:
  * learn how to make AI influencers
  * Explain why safety and guardrails are required in AI systems
  * Describe how the OpenAI Moderation API works
  * Explain the purpose of Amazon Bedrock Guardrails: https://aws.amazon.com/bedrock/guardrails/
  * Identify risks associated with unguarded AI deployments
* Lecture outline: [Moderation & Guardrails](curriculum/01-19-moderation-guardrails/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

* Observability Foundations
  * Observability concepts
  * Logs, metrics, traces
  * CloudWatch basics: https://aws.amazon.com/cloudwatch/
  * Athena querying: https://aws.amazon.com/athena/
  * What is Redshift: https://aws.amazon.com/pm/redshift/
* Objectives:
  * Explain what observability is and why it matters in modern systems
  * Distinguish between logs, metrics, and traces
  * Explain how observability differs from basic monitoring
  * Identify where observability fits in AI and distributed systems
* Lecture outline: [Observability Foundations](curriculum/01-09-observability-foundations/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 6th

* LlamaIndex: https://www.llamaindex.ai/
* LlamaParse: https://www.llamaindex.ai/llamaparse
* LlamaCloud: https://www.llamaindex.ai/llamacloud
* Objectives:
  * Explain what LlamaIndex is and why it exists
  * Describe how LlamaIndex differs from raw embedding pipelines
  * Explain the role of LlamaParse in document ingestion
  * Identify when LlamaIndex is the right abstraction for AI systems
* Lecture outline: [LlamaIndex & LlamaParse](curriculum/01-07-llamaindex-llamaparse/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

* OpenAI APIs
  * Files: https://platform.openai.com/docs/api-reference/files
  * Responses: https://platform.openai.com/docs/api-reference/responses
  * Vector Stores: https://platform.openai.com/docs/api-reference/vector-stores
  * Embeddings: https://platform.openai.com/docs/api-reference/embeddings
* Sample project that uses them: https://github.com/MidnightCoder06/housing-justice-builder
* Objectives:
  * Explain what embeddings are and why they matter
  * Describe the purpose of files and vector stores in AI systems
  * Explain how embeddings enable semantic search and retrieval
  * Identify real-world use cases for vector-based systems
* Lecture outline: [OpenAI APIs](curriculum/01-05-openai-apis-files-vector-stores-embeddings/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

* OpenAI Audio API: https://platform.openai.com/docs/api-reference/audio
* Objectives:
  * Explain what the OpenAI Audio API is
  * Describe the difference between text-to-speech and speech-to-text
  * Identify use cases for audio interfaces in AI systems
  * Explain tradeoffs between audio, text, and multimodal interfaces
* Lecture outline: [OpenAI Audio API](curriculum/01-20-openai-audio-api/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

* OpenAI Realtime API (Voice): https://platform.openai.com/docs/guides/realtime
* Objectives:
  * Explain what the OpenAI Realtime API is
  * Describe how realtime voice interactions differ from batch audio processing
  * Identify use cases that require low-latency voice AI
  * Explain architectural considerations for realtime systems
* Lecture outline: [OpenAI Realtime API](curriculum/01-21-openai-realtime-api-voice/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 7th

* OpenAI Audio API & Realtime API Pt. 2

* Debugging Pt. 2

* OpenAI Codex
  * Visual Studio extension
  * CLI
* Objectives:
  * Explain what OpenAI Codex is and how it differs from general LLM usage
  * Describe how Codex assists developers in real workflows
  * Identify appropriate use cases for Codex in CLI and IDE environments
  * Explain the risks of over-reliance on AI coding tools
* Lecture outline: [OpenAI Codex](curriculum/01-06-openai-completions/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

* Customer Support Agent Architecture
* Objectives:
  * Design AI support agents
  * Understand escalation logic
* Lecture outline: [Customer Support Agent](curriculum/01-16-customer-support-agent-architecture/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 8th

* n8n 
* comfyUI
* Objectives:
  * Explain what workflow automation is and why it matters
  * Describe how n8n enables event-driven automation
  * Explain what ComfyUI is and how it fits into AI pipelines
  * Identify use cases where automation compounds value
* Lecture outline: [n8n & ComfyUI](curriculum/01-14-workflow-automation-n8n-comfyui/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 9th

* Setting up Cloudwatch
* Setting up Athena 
* Setting up Redshift

* Gemini + NotebookLM + Google Workspace
* Objectives:
  * Explain how Gemini integrates into workplace productivity tools
  * Describe what NotebookLM is and how it differs from general chatbots
  * Identify knowledge-work tasks that benefit most from AI assistance
  * Explain the risks of using AI blindly in professional environments
* Lecture outline: [Gemini & NotebookLM](curriculum/01-15-gemini-notebooklm/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 12th

* MCP Server
* AWS Cloudwatch MCP Server
* Objectives:
  * Explain what the Model Context Protocol (MCP) is
  * Describe how MCP servers extend AI systems with operational context
  * Explain how observability data can be accessed through MCP
  * Identify use cases for MCP in AI-driven operations
* Lecture outline: [MCP Server](curriculum/01-12-observability-via-mcp/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 13th

* Datadog MCP Server
* Grafana MCP Server
* Objectives:
  * Explain the role of Datadog and Grafana in observability ecosystems
  * Describe how MCP servers expose third-party observability tools to AI systems
  * Compare Datadog and Grafana use cases
  * Identify scenarios where AI-assisted observability adds the most value
* Lecture outline: [Datadog & Grafana MCP](curriculum/01-13-datadog-grafana-mcp/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 14th

* Claude Code
* Objectives:
  * Explain what Claude Code is and how it differs from general LLM usage
  * Describe how Claude Code assists developers in real workflows
  * Identify appropriate use cases for Claude Code in CLI and IDE environments
  * Explain the risks of over-reliance on AI coding tools
* Lecture outline: [Claude Code](curriculum/01-08-openai-codex-cli-vs-code/lecture-outline.md)
* Lecture recording: [📺](https://www.youtube.com/@jeanleconteii)

### January 15th
* LlamaIndex & LlamaParse Pt. 2

### January 16th
* n8n & comfyUI Pt. 2

### January 19th
* AI Ad creation part 2
* Eleven Labs

### January 20th
* Sales Agent Project

### January 21st
* Using Ollama to customize an open source model (llamaa) and use it locally