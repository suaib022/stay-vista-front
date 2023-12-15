import React, { useEffect, useState } from 'react';
import Card from './Card';
import Container from '../Shared/Container';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';
import Loader from '../Loader/Loader';

const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const category = params.get('category');

    useEffect(() => {
        setLoading(true);
        fetch('../../../public/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filter = data.filter(room => room.category === category);
                    setRooms(filter);
                    setLoading(false);
                }
                else (setRooms(data));
                setLoading(false)
            })
    }, [category]);

    // console.log(rooms);

    if(loading) return <Loader></Loader>;
    
    return (
        <Container>
            {
                rooms.length > 0
                    ?
                    <div>
                        {
                            !category && <p className='text-center font-semibold text-3xl mt-3'>All Services</p>
                        }
                        <h2 className='text-2xl font-semibold text-center mt-6 mb-10'>Available : {rooms.length}</h2>

                        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                            {
                                rooms.map(room => <Card key={room._id} room={room}></Card>)
                            }
                        </div>
                    </div>
                    :

                    <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                        <Heading title={'No Rooms Available For This Category'} center={true} subtitle={'Please Select Other Categories'} />
                    </div>

            }

        </Container>
    );
};

export default Rooms;