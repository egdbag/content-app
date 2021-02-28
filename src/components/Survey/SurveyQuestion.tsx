import { IconButton, TextField } from '@material-ui/core';
import React, { Component, useEffect } from 'react'
import PostAddIcon from '@material-ui/icons/PostAdd';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import SurveyAnswer from './SurveyAnswer';
import './Survey.css'
export class SurveyQuestion extends Component<any> {

    constructor(props: any) {
        super(props);
        this.state = { blocks: [], values: [] };
    }

    clickAnswerHandle = () => {
        var a = (this.state as any).blocks;
        var count = a.length;
        a.push(
            <SurveyAnswer></SurveyAnswer>
        );
        this.setState({ blocks: a })
    }

    onTextChange = () => {

    }

    clickQuestionHandle = () => {
        var a = (this.state as any).blocks;
        var count = a.length;
        a.push(
            <div className="survey_container__question">
                <TextField id={"outlined-basic-" + count} label="Вопр" variant="outlined"
                    onChange={this.onTextChange} className="survey_container__input "
                />
                <SurveyAnswer></SurveyAnswer>
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

        return <div className="survey_container">
            <div>
                <IconButton aria-label="delete" onClick={this.clickQuestionHandle}>

                    <PostAddIcon fontSize="large" />
                </IconButton>
            </div>

            <div style={{ width: "100%" }}>

                {(this.state as any).blocks.map((x: any) => {
                    return x
                })
                }
            </div>




        </div>


    }
}


export default SurveyQuestion;