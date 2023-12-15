import axios from 'axios';

const UseAxiosSecure = () => {
    const instance =  axios.create({
        baseURL: import.meta.env.VITE_API_SERVER_URL,
        withCredentials: true,
    });

    return instance;
}

export default UseAxiosSecure;
