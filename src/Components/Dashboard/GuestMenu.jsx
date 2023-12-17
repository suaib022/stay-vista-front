import React from 'react';
import MenuItem from './MenuItem';
import { BsFingerprint } from 'react-icons/bs';

const GuestMenu = () => {
    return (
        <>
                <MenuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='/dashboard/myBookings'
            />
        </>
    );
};

export default GuestMenu;