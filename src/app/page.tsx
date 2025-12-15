import './globals.css'

export default function Home() {
  return (
    <main className="container">
      {/* Ambient background orbs */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />

      <h1 className="title">Winter Immersion Syllabus</h1>

      <div className="cards-grid">
        {/* January 2nd */}
        <div className="card card-1">
          <span className="card-date">January 2nd</span>
          <h2 className="card-title">Intro to LLMs & Gemini</h2>
          <ul className="card-topics">
            <li className="card-topic">Veo3</li>
            <li className="card-topic">Nano Banana</li>
            <li className="card-topic">Debugging Best Practices</li>
          </ul>
        </div>

        {/* January 5th */}
        <a 
          href="https://github.com/MidnightCoder06/housing-justice-builder" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card card-2 card-link"
        >
          <span className="card-date">January 5th</span>
          <h2 className="card-title">Intro to OpenAI APIs</h2>
          <ul className="card-topics">
            <li className="card-topic">Files</li>
            <li className="card-topic">Responses</li>
            <li className="card-topic">Vector Stores</li>
            <li className="card-topic">Embeddings</li>
          </ul>
        </a>

        {/* January 6th */}
        <div className="card card-3">
          <span className="card-date">January 6th</span>
          <h2 className="card-title">OpenAI Codex</h2>
          <ul className="card-topics">
            <li className="card-topic">Visual Studio Extension</li>
            <li className="card-topic">CLI</li>
          </ul>
        </div>

        {/* January 7th */}
        <div className="card card-4">
          <span className="card-date">January 7th</span>
          <h2 className="card-title">LlamaIndex Ecosystem</h2>
          <ul className="card-topics">
            <li className="card-topic">LlamaIndex</li>
            <li className="card-topic">LlamaParse</li>
          </ul>
        </div>

        {/* January 8th */}
        <div className="card card-5">
          <span className="card-date">January 8th</span>
          <h2 className="card-title">Claude Code</h2>
          <ul className="card-topics">
            <li className="card-topic">Claude Code</li>
          </ul>
        </div>

        {/* January 9th */}
        <div className="card card-6">
          <span className="card-date">January 9th</span>
          <h2 className="card-title">Observability</h2>
          <ul className="card-topics">
            <li className="card-topic">Logs, Metrics, Traces</li>
            <li className="card-topic">CloudWatch Basics</li>
            <li className="card-topic">Athena Querying</li>
          </ul>
        </div>

        {/* January 12th */}
        <div className="card card-7">
          <span className="card-date">January 12th</span>
          <h2 className="card-title">MCP Servers Part 1</h2>
          <ul className="card-topics">
            <li className="card-topic">MCP Server</li>
            <li className="card-topic">AWS CloudWatch MCP</li>
          </ul>
        </div>

        {/* January 13th */}
        <div className="card card-8">
          <span className="card-date">January 13th</span>
          <h2 className="card-title">MCP Servers Part 2</h2>
          <ul className="card-topics">
            <li className="card-topic">Datadog MCP Server</li>
            <li className="card-topic">Grafana MCP Server</li>
          </ul>
        </div>

        {/* January 14th */}
        <div className="card card-9">
          <span className="card-date">January 14th</span>
          <h2 className="card-title">Automation Part 1</h2>
          <ul className="card-topics">
            <li className="card-topic">n8n</li>
            <li className="card-topic">ComfyUI</li>
          </ul>
        </div>

        {/* January 15th */}
        <div className="card card-10">
          <span className="card-date">January 15th</span>
          <h2 className="card-title">Automation Part 2</h2>
          <ul className="card-topics">
            <li className="card-topic">Gemini</li>
            <li className="card-topic">NotebookLM</li>
            <li className="card-topic">Google Workspace</li>
          </ul>
        </div>

        {/* January 16th */}
        <div className="card card-11">
          <span className="card-date">January 16th</span>
          <h2 className="card-title">Agent Architecture</h2>
          <ul className="card-topics">
            <li className="card-topic">Customer Support Agent</li>
          </ul>
        </div>

        {/* January 19th */}
        <div className="card card-12">
          <span className="card-date">January 19th</span>
          <h2 className="card-title">Content Moderation</h2>
          <ul className="card-topics">
            <li className="card-topic">OpenAI Moderation API</li>
            <li className="card-topic">Amazon Bedrock Guardrails</li>
          </ul>
        </div>

        {/* January 20th */}
        <div className="card card-13">
          <span className="card-date">January 20th</span>
          <h2 className="card-title">Audio Processing</h2>
          <ul className="card-topics">
            <li className="card-topic">OpenAI Audio API</li>
          </ul>
        </div>

        {/* January 21st */}
        <div className="card card-14">
          <span className="card-date">January 21st</span>
          <h2 className="card-title">Voice Interfaces</h2>
          <ul className="card-topics">
            <li className="card-topic">OpenAI Realtime API</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
