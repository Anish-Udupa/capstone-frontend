import "./Dashboard.css";
import StatsCard from "./stats-card/StatsCard";

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <StatsCard />
            <div id="dashboard-options">
                <div>Create New Pentest</div>
                <div>View Status</div>
                <div>View Past Reports</div>
            </div>
        </div>
    )
}