import React from 'react';
import Link from '@material-ui/core/Link';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import './Menu.css';

function Menu() {
    return (
        <div className="menu">
            <Link>
                <div className="menu__element">
                    <LibraryBooksIcon className="menu__element__icon"/>
                    <p>My articles</p>
                </div>
            </Link>
            <Link>
                <div className="menu__element">
                    <BookmarksIcon className="menu__element__icon"/>
                    <p>My bookmarks</p>
                </div>
            </Link>
        </div>
    )
}

export default Menu;