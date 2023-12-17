import { useLoaderData, useParams } from 'react-router-dom';
import Container from '../../Components/Shared/Container';
import Loader from '../../Components/Loader/Loader';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Header from '../../Components/RoomDetails/Header';
import RoomInfo from '../../Components/RoomDetails/RoomInfo';
import RoomReservation from '../../Components/RoomDetails/RoomReservation';


const RoomDetails = () => {

    const room = useLoaderData();

    return (
        <div>
            <Container>
                <Helmet>
                    <title>{room?.title}</title>
                </Helmet>
                <div className='max-w-screen-lg mx-auto'>
                    <div className='flex flex-col gap-6 '><Header room={room}></Header>
                    </div>

                    <div className='mt-6 gap-6 grid grid-cols-1 md:grid-cols-7'>
                        <div className='col-span-4'>
                            <RoomInfo room={room} />
                        </div>
                        <div className='col-span-3  flex mx-auto'>
                            <RoomReservation room={room} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RoomDetails;