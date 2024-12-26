import axios from "axios";

export const register = async (body: any) => {
    const response = await axios.post(`/api/auth/register`, body);
    return response;
}