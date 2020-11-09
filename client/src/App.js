import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationAdmin from './components/NavigationAdmin';
import Login from './components/Login';
import Init from './components/Init';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Init}/>
      <Route path="/login" component={Login}/>
      <Route path="/navigationAdmin" component={NavigationAdmin}/>
    </BrowserRouter>
  );
}

export default App;
