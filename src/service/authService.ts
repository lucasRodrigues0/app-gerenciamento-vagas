import axios from "axios";

export const register = async (body: any) => {
    try {
        const response = await axios.post(`/api/auth/register`, body);
        return response;
    } catch (error: any) {
        const response = error.response.data;
        return response;
    }
}

export const login = async (body: any) => {
    const response = await axios.post('/api/auth/login', body);
    return response;
}