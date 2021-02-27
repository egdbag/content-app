import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import DefaultProfilePic from './account_box-24px.svg'
import './Profile.css';

function ProfileMock() {
    return (
        <div className="profile">
            <Avatar variant="rounded" alt="Mock"/>
            <div className="profile__name">
                <p>Firstname</p>
                <p>Lastname</p>
            </div>
        </div>
    )
}

export default ProfileMock;