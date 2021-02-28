import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import './BookList.css'
import { TextField } from '@material-ui/core';

function valuetext(value: number) {
    return `${value} мин`;
}

function createData(name: string, data: number) {
    return { name, data };
}

function changeHandle() {
}
const Mock = { mock: [] }

class BookList extends Component {

    public marks = [
        {
            value: 10,
            label: '10 мин',
        },
        {
            value: 30,
            label: '30 мин',
        },
        {
            value: 60,
            label: '60 мин',
        },
        {
            value: 90,
            label: '90 мин',
        },
    ];

    public rows = [
        createData('Frozen yoghurt', 10),
        createData('Ice cream sandwich', 15),
        createData('Eclair', 17),
        createData('Cupcake', 5),
        createData('Gingerbread', 5),
    ];

    render() {

        
        return <React.Fragment>
            <div className="book-list">
                <Paper elevation={10}>
                    <div className="book-list__block">
                        <div className="book-list__block__date">

                            <form className={"test"} noValidate>
                                <TextField
                                    id="date"
                                    label="Сегодня"
                                    type="date"
                                    defaultValue="2021-02-28"
                                    className={"test"}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>

                            {/*   <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value="2017-05-24T10:30"
                            onChange={changeHandle}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        /> */}
                        </div>
                        <Slider defaultValue={45}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-custom"
                            step={5}
                            valueLabelDisplay="auto"
                            marks={this.marks} />
                    </div>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Контент</TableCell>
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
                    <Button variant="contained" color="primary">ДОБАВИТЬ НОВУЮ СТАТЬЮ</Button>
                </Paper>
            </div>
        </React.Fragment>
    }
}

export default BookList