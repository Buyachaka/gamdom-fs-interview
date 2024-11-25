import {Navbar} from "flowbite-react";
import gamdomLogo from "../../assets/gamdom-logo.svg";
import {useLocation} from "react-router-dom";

const topNavBarTheme = {
    root: {

    },
};

export default function TopNav () {
    const location = useLocation();

    const isSportsRoute = location.pathname === "/sports";
    return (
        <Navbar
            fluid
            rounded
            theme={topNavBarTheme}
            className={`bg-main pt-4 text-white `}
        >
            <Navbar.Brand className="flex flex-row p-2 text-xl uppercase" href="/">
                <img src={gamdomLogo} alt={'logo'}/>
            </Navbar.Brand>
            <Navbar.Toggle />
            {
                isSportsRoute && (
                    <Navbar.Collapse>
                        <Navbar.Collapse>
                            <div className={" rounded bg-gray-800 pr-2 shadow-md"}>
                                <div>💰$30</div>
                            </div>
                        </Navbar.Collapse>

                        <Navbar.Collapse>
                            <div className={"mr-5 rounded bg-gray-800 px-2 shadow-md"}>
                                <div>Admin</div>
                            </div>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                )
            }
        </Navbar>
    )
}