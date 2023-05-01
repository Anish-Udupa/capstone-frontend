import "./Dashboard.css";
import MiniCard from "./mini-card/MiniCard";
import StatsCard from "./stats-card/StatsCard";

export default function Dashboard() {

    const lorem = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,`;


    const mini_cards = [
        {
            title: "Create a Pentest",
            img_src: "",
            desc: lorem,
            onBtnClick: null
        },
        {
            title: "View Current Status",
            img_src: "",
            desc: lorem,
            onBtnClick: null
        },
        {
            title: "View Reports",
            img_src: "",
            desc: lorem,
            onBtnClick: null
        },
    ]

    return (
        <div id="dashboard-container">
            <StatsCard />
            <div id="dashboard-options">
                {mini_cards.map(card_item => <MiniCard {...card_item} />)}
            </div>
        </div>
    )
}