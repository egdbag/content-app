import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getAllTags, saveArticle } from '../../api/rest/article';
import { saveTextComponent } from '../../api/rest/component';
import { Button, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, IconButton, Link, ListItemIcon, Menu, MenuItem, TextField, Typography } from '@material-ui/core';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AddIcon from '@material-ui/icons/Add';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import ImageIcon from '@material-ui/icons/Image';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class Aside extends Component<any> {

    constructor(props: any) {
        super(props);
        this.state = { open: false };
    }

    okHandle = () => {
        this.setState({ open: false })
    }

    clickHandle = () => {
        var a = (this.props as any).d;
        var res = 0;


        var a1 = (this.state as any).open;

        this.setState({ open: !a1 })



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
        return <div>

            {/*  <Button variant="contained" onClick={this.clickHandle}>
                Опубликовать
  </Button> */}


            <Button
                variant="contained"
                onClick={this.clickHandle}
                color="default"

                startIcon={<CloudUploadIcon />}
            >
                Опубликовать
      </Button>


            <Dialog
                open={(this.state as any).open}
                // onClose={false}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Опубликованная статья"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Link target="_blank" href="https://article.airaketa.keenetic.link/articles/html/1">
                            https://article.airaketa.keenetic.link/articles/html/1
  </Link>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>


                    <Button onClick={this.okHandle} color="primary" autoFocus>
                        OK
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    }

    /*  render() {
 
         return
         (
             <React.Fragment>
                 <Button variant="contained" onClick={this.clickHandle}>
                     Опубликовать
   </Button>
 
             </React.Fragment>
 
         );
 
     } */
}


export default Aside;