export function Main() {
    return <div className="hero min-h-screen" style={{ background: "var(--mantle)"}}>
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hackclub: Stickers matchups!</h1>
<div className="mt-5">
<button className="btn btn-primary" onClick={() => window.location.hash = "#/lb"}>Leaderboard</button>
<button className="btn btn-primary" onClick={() => window.location.hash = "#/vote"}>Vote!</button>
</div>
      </div>
    </div>
  </div>
}