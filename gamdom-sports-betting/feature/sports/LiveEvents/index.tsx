import OdsDisplay from "./components/OdsDisplay";
import {useEffect, useState} from "react";
import ConfirmBetModal from "./components/ConfirmBetModal";
import {useFootballGames} from "../hooks/useFootBallGames";
import { Spinner } from "flowbite-react";
import {toast} from "react-toastify";

type event = {
    event_id: string
    event_name: string;
    homeOdds: number,
    drawOdds: number,
    awayOdds: number,
    oddTitle: string
}

type eventModal = {
    title: string,
    oddTitle: string,
    odd: number
}

export default function LiveEvents() {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<eventModal | null>(null);

    const handleOddsClick = (event: eventModal) => {
        setSelectedEvent(event);
        setShowConfirmModal(true);
    };

    const { data, isLoading, isError } = useFootballGames();

    useEffect(() => {
        if (isError) {
            toast.error(`Error Loading Live Events`);
        }
    }, [isLoading, isError])
    return (
        <>
            <div className="mt-5 flex justify-center">
                <div className="grid w-fit grid-cols-1  flex-col items-center rounded-lg bg-black p-6 text-center shadow-lg">
                    <h2 className="mb-6 text-3xl font-bold text-white">Live Events 🛑</h2>
                    <div className="grid w-full grid-cols-1 gap-6 overflow-y-auto overflow-x-visible overscroll-y-auto pr-0 md:grid-cols-3">
                        {
                            isLoading && <Spinner/>
                        }
                        {data && data.map((event: event) => (
                            <div
                                key={event.event_id}
                                className="flex flex-col items-center justify-start rounded-lg bg-gray-800 p-5 shadow-md"
                            >
                                <h3 className="mb-2 text-center text-xl font-semibold text-white">
                                    {event.event_name}
                                </h3>


                                <div className="flex w-full justify-between">
                                    <OdsDisplay title={"1"} odd={event.homeOdds} handleOddsClick={() => handleOddsClick({
                                        title: event.event_name,
                                        oddTitle: "1",
                                        odd: event.homeOdds
                                    })}/>
                                    <OdsDisplay title={"X"} odd={event.drawOdds} handleOddsClick={() => handleOddsClick({
                                        title: event.event_name,
                                        oddTitle: "X",
                                        odd: event.drawOdds
                                    })}/>
                                    <OdsDisplay title={"2"} odd={event.awayOdds} handleOddsClick={() => handleOddsClick({
                                        title: event.event_name,
                                        oddTitle: "2",
                                        odd: event.awayOdds
                                    })}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ConfirmBetModal eventTitle={selectedEvent?.title} odd={selectedEvent?.odd}
                             oddTitle={selectedEvent?.oddTitle} show={showConfirmModal} onClose={() => setShowConfirmModal(false)} />
            @        </>
    );
}
