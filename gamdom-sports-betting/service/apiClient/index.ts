import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    withCredentials: true,
});

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            if (!error.config.url.includes('/login')) {
                window.location.href = '/';
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;
