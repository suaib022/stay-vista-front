import UseAxiosSecure from "../Hooks/UseAxiosSecure";


const axiosSecure = UseAxiosSecure();

// show all rooms for a visitor or guest
export const getAllRooms = async () => {
    const { data } = await axiosSecure.get('/rooms');
    return data;
}

// show a single room details to a guest
export const getSingleRoom = async id => {
    const { data } = await axiosSecure.get(`/room/${id}`);
    return data;
}

// post or add a room 
export const saveRoom = async (roomData) => {
    const { data } = await axiosSecure.post('/rooms', roomData);
    return data;
}

// fetch all rooms of a host
export const getHostRooms = async email => {
    const { data } = await axiosSecure.get(`/rooms/${email}`);
    return data;
}
