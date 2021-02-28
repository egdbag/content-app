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
import imageSrc from './30.png';

function ProfileMock() {
    return (
        <div className="profile">
            <div className="profile__user">
                <Avatar className="avatar" alt="Mock" src={imageSrc} />
                <div className="profile__user__name">
                    <p>Бедняга Бедолага</p>
                    <div className="profile__achieve profile__achieve_padding">
                        <Tooltip title='Достижение: написать 5 статей'>
                            <Chip className="profile__achieve__element" avatar={<Avatar><VisibilityIcon /></Avatar>} label="Оракул" color="secondary" />
                        </Tooltip>
                        <Tooltip title='Достижение: более 20 сохранений в избранное'>
                            <Chip className="profile__achieve__element" avatar={<Avatar><BookmarkBorderIcon /></Avatar>} variant="outlined" label="Избранный" color="primary" />
                        </Tooltip>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileMock;