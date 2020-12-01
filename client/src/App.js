import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Init from './components/Init';
import AdminInterface from './components/AdminInterface';
import SuperUserInterface from './components/SuperUserInterface';
import UserInterface from './components/UserInterface';
import AdminGastosGomunes from './components/AdminGastosComunes';
import AdminBodega from './components/AdminBodega';
import AdminReclamos from './components/AdminReclamos';
import AdminGastosComunesCrear from './components/AdminGastosComunesCrear';
import AdminGastosComunesRevisar from './components/AdminGastosComunesRevisar';
import AdminGastosComunesCuenta from './components/AdminGastosComunesCuenta';
import AdminGastosComunesHistorial from './components/AdminGastosComunesHistorial';
import UserReclamos from './components/UserReclamos';
import UserGastosComunes from './components/UserGastosComunes';
import UserReclamosCrear from './components/UserReclamosCrear';
import UserReclamosRevisar from './components/UserReclamosRevisar';
import UserGastosComunesVer from './components/UserGastosComunesVer';
import AdminUsuarios from './components/AdminUsuarios';
import AdminUsuariosCrear from './components/AdminUsuariosCrear';
import AdminUsuariosEditar from './components/AdminUsuariosEditar';
import AdminUsuariosEliminar from './components/AdminUsuariosEliminar';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Init}/>
      <Route path="/users/adm" exact component={AdminInterface}/>
      <Route path="/users/adm/usuarios" exact component={AdminUsuarios}/>
      <Route path="/users/adm/usuarios/crear" exact component={AdminUsuariosCrear}/>
      <Route path="/users/adm/usuarios/editar" exact component={AdminUsuariosEditar}/>
      <Route path="/users/adm/usuarios/eliminar" exact component={AdminUsuariosEliminar}/>
      <Route path="/users/adm/bodega" exact component={AdminBodega}/>
      <Route path="/users/adm/reclamos" exact component={AdminReclamos}/>
      <Route path="/users/adm/gastos" exact component={AdminGastosGomunes}/>
      <Route path="/users/adm/gastos/crear" exact component={AdminGastosComunesCrear}/>
      <Route path="/users/adm/gastos/revisar" exact component={AdminGastosComunesRevisar}/>
      <Route path="/users/adm/gastos/cuenta" exact component={AdminGastosComunesCuenta}/>
      <Route path="/users/adm/gastos/cuenta/historial" exact component={AdminGastosComunesHistorial}/>


      <Route path="/users/sup" exact component={SuperUserInterface}/>


      <Route path="/users/usr" exact component={UserInterface}/>
      <Route path="/users/usr/reclamos" exact component={UserReclamos}/>
      <Route path="/users/usr/reclamos/crear" exact component={UserReclamosCrear}/>
      <Route path="/users/usr/reclamos/revisar" exact component={UserReclamosRevisar}/>
      <Route path="/users/usr/gastos" exact component={UserGastosComunes}/>
      <Route path="/users/usr/gastos/ver" exact component={UserGastosComunesVer}/>
      



      

 
    </BrowserRouter>
  );
}

export default App;
