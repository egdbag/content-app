import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import './ArticleList.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function createData(name: string, data: number) {
    return { name, data };
}

class ArticleList extends Component {

    public rows = [
        createData('Как приготовить замороженный йогурт', 10),
        createData('Все о Docker', 15),
        createData('Как выбрать подарок на 8 марта', 17),
        createData('Бухгалтерский учет: как учитывать все', 5),
        createData('"Алло, это Сбанк, вы совершали операцию на суммму...?" как на самом деле выглят колл-центры банков', 5),
    ];

    render() {
        return <React.Fragment>
            <div className="book-list">
                <Paper elevation={10}>
                    <div className="book-list__block">
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Название публикации</TableCell>
                                    <TableCell align="center">Продолжительность</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.rows.map((row: any) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.data}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    }
}

export default ArticleList