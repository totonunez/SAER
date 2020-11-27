import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';

import tasks from './tasks.json';


export default class AdminReclamos extends Component {

    

    

    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: "",
        tasks: tasks,
        respuesta: tasks.respuesta
    };

    componentDidMount = async () => {
        if(this.state.verify !== null){
            const res = await axios.get('/auth/adm/');
            this.setState({
                verify: res.data.resul,
                cod_rol: res.data.cod_rol,
                message: res.data.message
            });
        }
    };

    componentWillUnmount = () => {
        alert(this.state.message);
    };



    logOut = async () => {
        const res = await axios.get("/auth/logout");
        this.setState({
            verify: res.data.resul,
            message: res.data.message
        });
    };

        

    
    render() {
        switch(this.state.verify) {
            case false:
                return <Redirect to={{ pathname: '/users/'+this.state.cod_rol}}/>;
            case null:
                return <Redirect to={{ pathname: '/'}}/>; 
            default:
                break;
        };
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <span className="navbar-brand mb-0 h1">Sistema de Administración 
                <br/>
                de Edificios y Recursos</span>
                </nav>
                    <div className="container">
                        <Link className="navbar-brand" to="#">Hola, Administrador</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={{ pathname: '/users/adm'}}>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/users/adm/reclamos'>Reclamos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={{ pathname: '/users/adm/gastos'}}>Gastos Comunes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={{ pathname: '/users/adm/bodega'}}>Bodega</Link>
                                </li>
                                <li className="nav-item active">
                                    <button type="button" className="btn btn-primary" onClick={this.logOut}>
                                        Cerrar sesión
                                    </button>  
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                <h1> <span className="badge badge-secondary">Gestionar Reclamos</span></h1>


                <div>
                {this.state.tasks.map(e => <p key={e.id}>

                <div className="card">
                  <div className="card-header">
                    Numero de reclamo: {e.id}
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                <p>Descripción del reclamo: {e.descripcion} </p>
                      <footer className="blockquote-footer"> Residente que hizo el reclamo: {e.residente} </footer>
                    </blockquote>
                    <br/>
                    <blockquote className="blockquote mb-0">
                <p>Respuesta Administración: {e.respuesta} </p>
                    </blockquote>
                  </div>
                  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
                        Finalizar Reclamo
  </label>
</div>
                <form> 
                  <input 
                  className="form-control"
                  name="respuesta"
                  type="text" 
                  placeholder="Escribir una Respuesta" 
                   />
                  
                  <button type="submit" class="btn btn-primary my-1">Enviar Respuesta</button>
                  </form>
                  
                </div>               
               
                </p>)}
                </div>

                
                </div>
            </div>  
        )
    };
}
