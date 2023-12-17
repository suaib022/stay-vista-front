
import { useState } from 'react';
import Button from '../Button/Button';
import { differenceInDays } from 'date-fns';
import Calender from './Calender';


const RoomReservation = ({ room }) => {

    // console.log(totalDays);
    const totalDays = differenceInDays(new Date(room?.to), new Date(room?.from));
    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection'
    })

    return (
        <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
            <div className='flex items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>${room?.price}</div>
                <div className='font-light text-neutral-600'>Night</div>
            </div>
            <hr />
            <Calender value={value}></Calender>
            <hr />
            <div className='p-4'>
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className='p-4 flex items-center justify-between font-semibold text-lg'>
                <div>Total</div>
                <div>${room?.price * totalDays}</div>
            </div>
        </div>
    );
};

export default RoomReservation;