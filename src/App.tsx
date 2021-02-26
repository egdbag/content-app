import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Article/Article'
import Article from './components/Article/Article';
import ProfileMock from './components/Profile/Profile'
import Menu from './components/Menu/Menu'

import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">        
        <div>
          <ProfileMock></ProfileMock>
          <Menu></Menu>
        </div>
        <Article></Article>
        <div>
          <Button variant="contained" disabled>
            Publish
          </Button>
        </div>
    </div>
  );
}

export default App;
