import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login}/>
      <Route path="/navigation" component={Navigation}/>
    </BrowserRouter>
  );
}

export default App;
