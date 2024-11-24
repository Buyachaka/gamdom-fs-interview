import { Button, Label, TextInput } from "flowbite-react";
import gamdomLogo from "../../../assets/logo-no-text.svg";

export default function LoginPanel() {

    const handleSubmitSend = (event: any) => {
        event.preventDefault()
    }

    return (
        <div className="flex min-h-screen items-center justify-center ">
            <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-center">
                    <img
                        src={gamdomLogo}
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <span className={`ml-3 text-2xl`}>Sign In</span>
                </div>

                <form onSubmit={handleSubmitSend}>
                    <div className="mb-4">
                        <Label htmlFor="username" value="Username"/>
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="admin"
                            required
                            className="bg-gray-50 border border-gray-300 focus:ring-emerald-400 focus:border-emerald-400"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password" value="Password"/>
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="admin"
                            required
                            className="border border-gray-300 bg-gray-50 focus:border-emerald-400 focus:ring-emerald-400"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-emerald-600 text-white  "
                    >
                        Sign In
                    </Button>
                </form>

            </div>
        </div>
    );
}
