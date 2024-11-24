import { Button, Modal } from "flowbite-react";
import { toast } from "react-toastify";
import {useEffect, useState} from "react";

type ConfirmBetModalProps = {
    eventTitle?: string;
    oddTitle?: string;
    odd?: number;
    show: boolean;
    onClose: () => void;
};

type betDictionary = {
    [key: string]: string;
}

const betDictionary: betDictionary= {
    '1': "Home",
    'X': "Draw",
    '2': "Away",
}

const headerTheme = {
    base: 'bg-gray-800 text-white flex p-3 rounded-t-lg bg-white border-b justify-center align-center',
    close: {
        base: 'hidden',
        hover: 'text-white',
    },
};

export default function ConfirmBetModal({
                                            eventTitle,
                                            oddTitle,
                                            odd,
                                            show,
                                            onClose,
                                        }: ConfirmBetModalProps) {

    const [currentBet, setCurrentBet] = useState(0);
    const [potentialWin, setPotentialWin] = useState(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent form reload
        toast.success(`Bet placed, good luck! 🍀`);
        onClose();
    };
    const onPopUpClose = () => {
        setCurrentBet(0);
        setPotentialWin(0);
        onClose();
    }

    useEffect(() => {
        if (isNaN(currentBet) || odd === undefined || odd === null) {
            return;
        }
        setPotentialWin(currentBet * odd);
    }, [currentBet, odd]);


    return (
        <>
            <Modal show={show} onClose={onPopUpClose} size="lg">
                <Modal.Header theme={headerTheme}>{eventTitle}</Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center align-middle">
                            <div className={"m-auto"}>
                                Enter bet on <b className="px-0.5">{oddTitle && betDictionary[oddTitle]}</b> with odd <b className="ml-1">{odd}x</b>?
                            </div>
                            <input
                                max={30}
                                min={1}
                                onChange={(e) => setCurrentBet(Number(e.target.value))}
                                className={`m-auto mt-3 w-1/5 rounded-2xl `}
                                type="number"
                                required
                            />
                            <div className={"m-auto mt-2 text-center"}>
                                <div> Pontential win: </div>
                                <span className={"w-full text-center text-2xl"}>{Math.floor(potentialWin * 100) / 100}$</span>
                            </div>
                        </div>
                        <div className="mt-5 flex w-full justify-center gap-8">
                            <Button type="submit" className="bg-emerald-400">
                                Confirm Bet
                            </Button>
                            <Button onClick={onPopUpClose} className="bg-gray-600" type="button">
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
