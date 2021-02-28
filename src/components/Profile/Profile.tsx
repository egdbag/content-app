import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import './Profile.css';

function ProfileMock() {
    return (
        <div className="profile">
            <div className="profile__user">
                <Avatar variant="rounded" alt="Mock"/>
                <div className="profile__user__name">
                    <p>Firstname</p>
                    <p>Lastname</p>
                </div>
            </div>
            <div className="profile__achieve">
                <Tooltip title='Достижение: написать 5 статей'>
                    <Chip className="profile__achieve__element" avatar={<Avatar><VisibilityIcon/></Avatar>} label="Оракул" color="secondary" />
                </Tooltip>
                <Tooltip title='Достижение: более 20 сохранений в избранное'>
                    <Chip className="profile__achieve__element" avatar={<Avatar><BookmarkBorderIcon/></Avatar>} variant="outlined" label="Избранный" color="primary" />
                </Tooltip>
            </div>
        </div>
    )
}

export default ProfileMock;