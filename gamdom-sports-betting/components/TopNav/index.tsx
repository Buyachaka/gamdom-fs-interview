import {Navbar} from "flowbite-react";
import gamdomLogo from "../../assets/gamdom-logo.svg";

const topNavBarTheme = {
    root: {
        inner: {
            base: "mx-auto flex flex-wrap items-center justify-start h-[800px]",
        },
    },
};

export default function TopNav () {
    return (
        <Navbar
            fluid
            theme={topNavBarTheme}
            className={`bg-main pt-4 text-white `}
        >
            <Navbar.Brand className="flex flex-row p-2 text-xl uppercase" href="/">
                <img src={gamdomLogo}/>
            </Navbar.Brand>
        </Navbar>
    )
}