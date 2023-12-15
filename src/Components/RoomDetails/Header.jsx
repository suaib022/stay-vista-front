import React from 'react';
import Heading from '../Heading/Heading';

const Header = ({ room }) => {

    return (
        <>
            <Heading title={room.title} subtitle={room.location} />
            <div className='w-full overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full md:h-[400px]'
                    src={room.image}
                    alt='header image'
                />
            </div>
        </>
    );
};

export default Header;