import axios from 'axios';
import { clearCookie } from '../API/Auth';

const UseAxiosSecure = () => {

    const instance = axios.create({
        baseURL: 'http://localhost:5000',
        withCredentials: true,
    })

    // intercept response and check unauthorized user
    instance.interceptors.response.use(response => response, async (error) => {
        if (error.response &&
            (error.response.status === 401 || error.response.status === 403)) {
            await clearCookie();
            window.location.replace('/logIn');
        }
        return Promise.reject(error)
    })

    return instance;
};




export default UseAxiosSecure;
