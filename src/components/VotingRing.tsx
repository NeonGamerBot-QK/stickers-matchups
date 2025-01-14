import { useEffect, useState } from "react"
import { Matchup } from "../util/api"

export function VotingRing() {
    const [matchups, setMatchups] = useState<Matchup | null>(null)
    useEffect(() => {
        if(!localStorage.getItem("username")) {
        window.location.search = `?e=1`
            window.location.hash = "#"
        }
    })
    useEffect(() => {
        getMatchups().then(m => setMatchups(m))
    })
    return (
<div>
    <h1>Voting ring</h1>
<div>
    <div id="project-1">
        <img src="" loading="lazy" alt="Image" id="pr1-img"/>
        <h1 id="pr1-title"></h1>
        <button id="pr1-btn" className="btn btn-primary">Vote!</button>
    </div>
    <div id="project-2">
        <img src="" loading="lazy" alt="Image" id="pr1-img"/>
        <h1 id="pr1-title"></h1>
        <button id="pr1-btn" className="btn btn-primary">Vote!</button>
    </div>
</div>
</div>
    )
}