import React from 'react';
import Routes from './routes';
import './App.css';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </Router>
  );
}

export default App;
