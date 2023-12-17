import React from 'react';
import MenuItem from './MenuItem';
import { BsHouseAddFill } from 'react-icons/bs';
import { MdHomeWork } from 'react-icons/md';

const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsHouseAddFill}
                label='Add Room'
                address='/dashboard/addRoom'
            />
            <MenuItem
                icon={MdHomeWork}
                label='My List'
                address='/dashboard/myList'
            />
        </>
    );
};

export default HostMenu;