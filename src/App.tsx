import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Article/Article'
import Article from './components/Article/Article';
import Aside from './components/Aside/Aside';
import ProfileMock from './components/Profile/Profile'
import Menu from './components/Menu/Menu'

import Button from '@material-ui/core/Button';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {

  const [open, setOpen] = React.useState([]);

  var data: any;
  let d: any = { d: null }
  function getData() {
    var a = data;
  }
  const someVar = { todos: () => { }, showNav: true };
  const s = { todos: "your type for todos here", showNav: true };

  function setData(val: any) {
    setOpen(val);
  }

  return (
    <Provider store={store}>

      <div id="main">
        <div className="article">
          <Article t={setData}>  </Article>
        </div>
        <nav> <ProfileMock></ProfileMock>
          <Menu></Menu></nav>
        <aside>
          <Aside d={open}></Aside>
        </aside>
      </div>
      {/* <div className="App">
        <div>
          <ProfileMock></ProfileMock>
          <Menu></Menu>
        </div>
        <main>
          <Article></Article>
        </main>
        <div>
          <Button variant="contained" disabled>
            Publish
          </Button>
        </div>
      </div> */}
    </Provider>
  );
}

export default App;
