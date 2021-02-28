import { IconButton, TextField } from '@material-ui/core';
import React, { Component, useEffect } from 'react'
import PostAddIcon from '@material-ui/icons/PostAdd';
import PlusOneIcon from '@material-ui/icons/PlusOne';
export class SurveyAnswer extends Component<any> {

    constructor(props: any) {
        super(props);
        this.state = { blocks: [], values: [] };
    }

    onTextChange = () => {

    }

    s = () => {
        debugger
        var a = (this.state as any).blocks;
        var count = a.length;
        a.push(
            <div><TextField id={"outlined-basic-" + count} label="Ответ" variant="filled" className="article__text_block"
                onChange={this.onTextChange}
            />

            </div>
        );
        this.setState({ blocks: a })

    }

    /* 
    <TextField
              error
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="outlined"
            /> */
    render() {

        return <div>
            <IconButton aria-label="delete" onClick={this.s} >

                <PlusOneIcon fontSize="large" />
            </IconButton>
            <div>
                {(this.state as any).blocks.map((x: any) => {
                    return x
                })
                }

            </div>



        </div>


    }
}


export default SurveyAnswer;