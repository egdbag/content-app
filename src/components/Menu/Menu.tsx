import React from 'react';
import Link from '@material-ui/core/Link';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import Modal from '@material-ui/core/Modal';
import BookList from '../BookList/BookList'
import ArticleList from '../ArticleList/ArticleList'

import './Menu.css';

function Menu() {
    const [openBookMarks, setOpenBookMarks] = React.useState(false);
    const handleOpenBookMarks = () => {
        setOpenBookMarks(true);
    };
    const handleCloseBookMarks = () => {
        setOpenBookMarks(false);
    };
    
    const [openMyArticles, setOpenMyArticles] = React.useState(false);
    const handleOpenMyArticles = () => {
        setOpenMyArticles(true);
    };
    const handleCloseMyArticles = () => {
        setOpenMyArticles(false);
    };


    return (
        <div className="menu">
            <Link href="#" onClick={handleOpenMyArticles}>
                <div className="menu__element">
                    <LibraryBooksIcon className="menu__element__icon"/>
                    <p>Мои публикации</p>
                </div>
            </Link>
            <Modal open={openMyArticles} onClose={handleCloseMyArticles} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{<ArticleList/>}</Modal>

            <Link href="#" onClick={handleOpenBookMarks}>
                <div className="menu__element">
                    <BookmarksIcon className="menu__element__icon"/>
                    <p>Избранные публикации</p>
                </div>
            </Link>
            <Modal open={openBookMarks} onClose={handleCloseBookMarks} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{<BookList/>}</Modal>
        </div>
    )
}

export default Menu