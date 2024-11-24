import { useQuery } from '@tanstack/react-query';
import apiClient from "../../../../service/apiClient";

const fetchFootballGames = async () => {
    const { data } = await apiClient.get('/football/events');
    return data;
};

export const useFootballGames = () => {
    return useQuery({
        queryKey: ['footballGames'],
        queryFn: fetchFootballGames,
    });
};
