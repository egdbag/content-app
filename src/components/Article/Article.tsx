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
import './Article.css'
class Article extends Component {

  public static propTypes: any;

  constructor(props: any) {
    super(props);
    this.state = { blocks: [] };
  }


  componentDidMount() {
    (this.props as any).dispatch(getAllTags());
  }

  public clearData = () => {
    return {
      type: "CLEAR"
    };
  };

  componentWillMount() {
    //(this.props as any).dispatch(getAllTags());
    // 
  }
  handleClose = () => {
    var a = (this.state as any).blocks;
    a.push(
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        {/*  <img src={require('/1.jpeg')} /> */}
      </div>
    );
    this.setState({ blocks: a })
  };


  handleTextClick = () => {
    var a = (this.state as any).blocks;
    a.push(<TextField id="outlined-basic" label="Outlined" variant="outlined" className="article__text_block" />
    );
    this.setState({ blocks: a })
  }


  handleImgClick = () => {

    /*  saveArticle().then((response) => response.json())
       .then((json: any) => {
         console.log(json);
         (this.props as any).navigation.navigate("SuccessScreen");
         return json;
       })
       .catch((error) => {
         console.log(error);
         return error;
       }); */


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


    /*   var a = (this.state as any).blocks;
      a.push(<TextField id="outlined-basic" label="Outlined" variant="outlined" />
      );
      this.setState({ blocks: a }) */
  }

  render() {

    var a = (this.props as any).data;


    return <React.Fragment>
      <TextField id="standard-basic" label="Заголовок" className="article__title" />

      <div>
        {(this.state as any).blocks.map((x: any) => {
          return x
        })
        }

      </div>




      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>

            <IconButton aria-label="delete" {...bindTrigger(popupState)}>
              <AddIcon fontSize="large" />
              {/*               <Typography variant="inherit"></Typography>
 */}            </IconButton>

            {/* <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
              Open Menu
          </Button> */}
            <Menu {...bindMenu(popupState)}>

              <MenuItem onClick={this.handleTextClick}>
                <ListItemIcon>
                  <FormatColorTextIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit"  >Текст</Typography>
              </MenuItem>

              <MenuItem onClick={this.handleImgClick}>
                <ListItemIcon>
                  <ImageIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Рисунок</Typography>
              </MenuItem>



              <MenuItem onClick={popupState.close}>
                <ListItemIcon>
                  <FormatListBulletedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Опрос</Typography>
              </MenuItem>


            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </React.Fragment >

  }
}

const mapStateToProps = (state: any) => ({ ...state.whether });

export default connect(mapStateToProps)(Article)