import React from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
