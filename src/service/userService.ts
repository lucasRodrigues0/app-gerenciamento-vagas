import axios from "axios";

export const loadUser = async () => {
    const response = await axios.get('/api/user');
    return response.data;
}