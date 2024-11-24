import {useMutation} from '@tanstack/react-query';
import apiClient from "../../../service/apiClient";

type LoginParams = {
    username: string;
    password: string;
};

const login = async ({username, password}: LoginParams) => {
    const { data } = await apiClient.post("/login", { username, password });
    return data;
};

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
    });
};
