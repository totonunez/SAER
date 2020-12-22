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
import AdminBodegaRevisar from './components/AdminBodegaRevisar';
import AdminReclamos from './components/AdminReclamos';
import AdminGastosComunesCrear from './components/AdminGastosComunesCrear';
import AdminGastosComunesRevisar from './components/AdminGastosComunesRevisar';
import AdminGastosComunesCuenta from './components/AdminGastosComunesCuenta';
import AdminGastosComunesHistorial from './components/AdminGastosComunesHistorial';
import UserReclamos from './components/UserReclamos';
import UserGastosComunes from './components/UserGastosComunes';
import UserReclamosCrear from './components/UserReclamosCrear';
import UserReclamosRevisar from './components/UserReclamosRevisar';
import AdminUsuarios from './components/AdminUsuarios';
import AdminUsuariosCrear from './components/AdminUsuariosCrear';
import AdminUsuariosEditar from './components/AdminUsuariosEditar';
import AdminUsuariosEliminar from './components/AdminUsuariosEliminar';
import AdminBodegaAgregar from './components/AdminBodegaAgregar';
import AdminBodegaEliminar from './components/AdminBodegaEliminar';
import AdminTurnos from './components/AdminTurnos';
import AdminTurnosRevisar from './components/AdminTurnosRevisar';
import AdminTurnosEliminar from './components/AdminTurnosEliminar';
import AdminCorreos from './components/AdminCorreos';
import AdminCorreosRevisar from './components/AdminCorreosRevisar';
import AdminTurnosAgregar from './components/AdminTurnosAgregar';
import AdminCorreosAgregar from './components/AdminCorreosAgregar';
import AdminCorreosEliminar from './components/AdminCorreosEliminar';
import SuperUserBodega from './components/SuperUserBodega';
import SuperUserTurnos from './components/SuperUserTurnos';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Init}/>

      <Route path="/users/adm" exact component={AdminInterface}/>
      <Route path="/users/adm/usuarios" exact component={AdminUsuarios}/>
      <Route path="/users/adm/usuarios/crear" exact component={AdminUsuariosCrear}/>
      <Route path="/users/adm/usuarios/editar" exact component={AdminUsuariosEditar}/>
      <Route path="/users/adm/usuarios/eliminar" exact component={AdminUsuariosEliminar}/>
      
      <Route path="/users/adm/gastos" exact component={AdminGastosGomunes}/>
      <Route path="/users/adm/gastos/crear" exact component={AdminGastosComunesCrear}/>
      <Route path="/users/adm/gastos/revisar" exact component={AdminGastosComunesRevisar}/>
      <Route path="/users/adm/gastos/cuenta" exact component={AdminGastosComunesCuenta}/>
      <Route path="/users/adm/gastos/cuenta/historial" exact component={AdminGastosComunesHistorial}/>

      <Route path="/users/adm/bodega" exact component={AdminBodega}/>
      <Route path="/users/adm/bodega/revisar" exact component={AdminBodegaRevisar}/>
      <Route path="/users/adm/bodega/agregar" exact component={AdminBodegaAgregar}/>
      <Route path="/users/adm/bodega/eliminar" exact component={AdminBodegaEliminar}/>

      <Route path="/users/adm/turnos/" exact component={AdminTurnos}/>
      <Route path="/users/adm/turnos/revisar" exact component={AdminTurnosRevisar}/>
      <Route path="/users/adm/turnos/agregar" exact component={AdminTurnosAgregar}/>
      <Route path="/users/adm/turnos/eliminar" exact component={AdminTurnosEliminar}/>

      <Route path="/users/adm/correos/" exact component={AdminCorreos}/>   
      <Route path="/users/adm/correos/revisar" exact component={AdminCorreosRevisar}/>   
      <Route path="/users/adm/correos/agregar" exact component={AdminCorreosAgregar}/>   
      <Route path="/users/adm/correos/eliminar" exact component={AdminCorreosEliminar}/>   
      
      <Route path="/users/adm/reclamos" exact component={AdminReclamos}/>
            
      <Route path="/users/sup" exact component={SuperUserInterface}/>
      <Route path="/users/sup/turnos" exact component={SuperUserTurnos}/>
      <Route path="/users/sup/bodega" exact component={SuperUserBodega}/>



      <Route path="/users/usr" exact component={UserInterface}/>
      <Route path="/users/usr/reclamos" exact component={UserReclamos}/>
      <Route path="/users/usr/reclamos/crear" exact component={UserReclamosCrear}/>
      <Route path="/users/usr/reclamos/revisar" exact component={UserReclamosRevisar}/>
      <Route path="/users/usr/gastos" exact component={UserGastosComunes}/>
      
      



      

 
    </BrowserRouter>
  );
}

export default App;
