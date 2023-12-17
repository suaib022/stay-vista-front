import UseAxiosSecure from "../Hooks/UseAxiosSecure";
const axiosSecure = UseAxiosSecure();


// save user into database
export const saveUser = async (user) => {

    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified',
    };

    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
    return data;
};

// get token from server
export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', email);
    console.log(data);
    return data;
}

// remove token after logOut
export const clearCookie = async() => {
    const { data } = await axiosSecure.get('/logOut');
    return data;
}

// get user role
export const getRole = async email => {
    const {data} = await axiosSecure.get(`/user/${email}`);
    return data?.role;
}
