import './globals.css'

export default function Home() {
  return (
    <main className="container">
      {/* Ambient background orbs */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />

      <h1 className="title">Winter Immersion</h1>

      <div className="cards-grid">
        {/* January 2nd Card */}
        <div className="card card-1">
          <span className="card-date">January 2nd</span>
          <h2 className="card-title">Gemini APIs & Debugging</h2>
          <ul className="card-topics">
            <li className="card-topic">Veo3</li>
            <li className="card-topic">Nano Banana</li>
            <li className="card-topic">Debugging Best Practices</li>
          </ul>
        </div>

        {/* January 5th & 6th Card */}
        <div className="card card-2">
          <span className="card-date">January 5th & 6th</span>
          <h2 className="card-title">OpenAI APIs</h2>
          <ul className="card-topics">
            <li className="card-topic">Files</li>
            <li className="card-topic">Vector Stores</li>
            <li className="card-topic">Completions</li>
            <li className="card-topic">Embeddings</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
