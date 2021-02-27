import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getAllTags } from '../../api/rest/article';
import { Button, Container, CssBaseline, Menu, MenuItem, TextField, Typography } from '@material-ui/core';
class Article extends Component {

  public static propTypes: any;

  constructor(props: any) {
    super(props);
    this.state = { blocks: [1] };
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
    a.push(<TextField id="outlined-basic" label="Outlined" variant="outlined" />
    );
    this.setState({ blocks: a })
  };



  render() {

    var a = (this.props as any).data;


    return <React.Fragment>
      <TextField id="standard-basic" label="Standard" />
      <div>
        {(this.state as any).blocks.map((x: any) => {
          return x
        })
        }

      </div>
    </React.Fragment>

  }
}

const mapStateToProps = (state: any) => ({ ...state.whether });

export default connect(mapStateToProps)(Article)