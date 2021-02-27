import React from 'react';
import './Profile.css';
import DefaultProfilePic from './account_box-24px.svg'


function ProfileMock() {
    return (
        <div className="Profile">
            <div className="ProfilePicture">
                <img style={{height: 120,  width: 120}} src={DefaultProfilePic} />
            </div>
            <div className="ProfileName">
                <p>Firstname</p>
                <p>Lastname</p>
            </div>
        </div>
    )
}

export default ProfileMock;