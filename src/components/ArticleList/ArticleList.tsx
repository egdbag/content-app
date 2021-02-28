import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import './ArticleList.css'


class ArticleList extends Component {
    render() {
        return <React.Fragment>
            <div className="book-list">
                <Paper elevation={10}>
                <div className="book-list__block">
                        ArticleList
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    }
}

export default ArticleList