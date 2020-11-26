import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Init from './components/Init';
import AdminInterface from './components/AdminInterface';
import SuperUserInterface from './components/SuperUserInterface';
import UserInterface from './components/UserInterface';
import UserHome from './components/Userhome';
import AdminGastosGomunes from './components/AdminGastosComunes';
import UserGastosComunes from './components/UserGastosComunes.js';
import UserBodegaReparacion from './components/UserBodegaReparacion';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Init}/>
      <Route path="/users/adm" exact component={AdminInterface}/>
      <Route path="/users/sup" exact component={SuperUserInterface}/>
      <Route path="/users/usr" exact component={UserInterface}/>

      <Route path="/admin/gastos" exact component={AdminGastosGomunes}/>

      <Route path="/users/home" exact component={UserHome}/>
      <Route path="/gastoscomunes" exact component={UserGastosComunes}/>
      <Route path="/users/bodegareparacion" exact component={UserBodegaReparacion}/>
      
    </BrowserRouter>
  );
}

export default App;
