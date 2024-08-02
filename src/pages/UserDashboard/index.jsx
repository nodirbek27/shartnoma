import React from 'react';
import UserNavbar from '../../components/UserNavbar';
import UserBody from '../../components/UserBody';
import UserShartnomaPdf from '../../components/UserShartnomaPdf';

const UserDashboard = () => {
    return (
        <div>
            <UserNavbar />
            <UserBody />
            <UserShartnomaPdf />
        </div>
    );
};

export default UserDashboard;
