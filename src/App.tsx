import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Article/Article'
import Article from './components/Article/Article';
import ProfileMock from './components/Profile/Profile'
import Menu from './components/Menu/Menu'

import Button from '@material-ui/core/Button';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>

      <div id="main">
        <div className="article">
          <Article></Article>
        </div>
        <nav> <ProfileMock></ProfileMock>
          <Menu></Menu></nav>
        <aside>
          <Button variant="contained" disabled>
            Publish
          </Button>
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
