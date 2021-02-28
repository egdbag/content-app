import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getAllTags, saveArticle } from '../../api/rest/article';
import { saveTextComponent } from '../../api/rest/component';
import { Button, Container, CssBaseline, Fade, IconButton, ListItemIcon, Menu, MenuItem, TextField, Typography } from '@material-ui/core';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AddIcon from '@material-ui/icons/Add';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import ImageIcon from '@material-ui/icons/Image';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

class Aside extends React.Component<any> {

    constructor(props: any) {
        super(props);
    }
    clickHandle = () => {
        var a = (this.props as any).d;
        var res = 0;

        saveArticle()
            .then((response) => {
                response.json()
            })
            .then((json: any) => {
                console.log(json);
                //(this.props as any).navigation.navigate("SuccessScreen");
                return json;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });


        saveTextComponent().then((response) => response.json())
            .then((json: any) => {
                console.log(json);
                (this.props as any).navigation.navigate("SuccessScreen");
                return json;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });

    }

    render() {

        return <Button variant="contained" onClick={this.clickHandle}>
            Опубликовать
  </Button>

    }
}


export default Aside;