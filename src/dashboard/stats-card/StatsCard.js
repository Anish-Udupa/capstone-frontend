import { useState } from "react";
import "./StatsCard.css";

function StatsCard() {
    const [ number_of_tests, setNumberOfTests ] = useState(0)
    return (
        <div id="stats-card-container">
            STATS CARD
        </div>
    )
}

export default StatsCard;