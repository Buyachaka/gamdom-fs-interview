import { Button, Label, Spinner, TextInput } from "flowbite-react";
import gamdomLogo from "../../../../assets/logo-no-text.svg";
import { useLogin } from "../../hooks/useLogin.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPanel() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
    const navigate = useNavigate();

    const { mutate, isPending } = useLogin();

    const handleSubmitSend = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password } = event.currentTarget.elements as any;

        mutate(
            {
                username: username.value,
                password: password.value,
            },
            {
                onSuccess: () => {
                    setErrorMessage(null);
                    navigate("/sports");
                },
                onError: (error: any) => {
                    setErrorMessage(
                        error.response?.data?.message || "Login failed. Please try again."
                    );
                },
            }
        );
    };

    return (
        <div className="flex h-1/2 mt-40 items-center justify-center">
            <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-center">
                    <img src={gamdomLogo} alt="Logo" width={40} height={40} />
                    <span className="ml-3 text-2xl">Sign In</span>
                </div>

                <form onSubmit={handleSubmitSend}>
                    <div className="mb-4">
                        <Label htmlFor="username" value="Username" />
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="admin"
                            required
                            className="border border-gray-300 bg-gray-50 focus:border-emerald-400 focus:ring-emerald-400"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="admin"
                            required
                            className="border border-gray-300 bg-gray-50 focus:border-emerald-400 focus:ring-emerald-400"
                        />
                    </div>
                    {errorMessage && (
                        <p className="mb-4 text-sm text-red-500">{errorMessage}</p>
                    )}
                    <Button
                        type="submit"
                        className="w-full bg-emerald-600 text-white flex justify-center items-center"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <Spinner size="sm" light={true} />
                        ) : (
                            "Sign In"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}
