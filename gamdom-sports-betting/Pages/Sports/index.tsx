import BaseLayout from "../../layouts/Base";
import LiveEvents from "../../feature/sports/LiveEvents";

export default function SportsPage () {
    return (
        <BaseLayout>
            <div className={"p-6"}>
               <div className={"text-2xl text-white"}> Sports Betting</div>
               <LiveEvents />
            </div>
        </BaseLayout>
    )
}