import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Article/Article'
import Article from './components/Article/Article';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div /*  className="App" */>
        <header /* className="App-header" */>
          <Article></Article>
        </header>

      </div>
    </Provider>
  );
}

export default App;
