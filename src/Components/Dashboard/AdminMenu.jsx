import React from 'react';
import MenuItem from './MenuItem';
import { FaUserCog } from 'react-icons/fa';

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={FaUserCog}
                label='Manage Users'
                address='/dashboard/manageUsers'
            />
        </>
    );
};

export default AdminMenu;