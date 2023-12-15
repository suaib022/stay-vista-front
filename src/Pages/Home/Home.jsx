import React from 'react';
import Rooms from '../../Components/Rooms/Rooms';
import Category from '../../Components/Category/Category';

const Home = () => {
    return (
        <div>
            <Category></Category>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;