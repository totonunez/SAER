import React, { Component } from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';

import CrearReclamoForm from './CrearReclamoForm.js'
import tasks from './tasks.json'

export default class UserReclamosCrear extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: "",
        tasks: tasks
    };

    addReclamo = (descripcion) => {
        const newReclamo = {
            id: this.state.tasks.length,
            residente: this.state.rut,
            descripcion: descripcion,
            respuesta: "",
            resuelto: false
        }
        this.setState({
            tasks: [...this.state.tasks, newReclamo]
        })
    }

    componentDidMount = async () => {
        if(this.state.verify !== null){
            const res = await axios.get('/auth/usr/');
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
                        <Link className="navbar-brand" to="#">Hola, Residente</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={{ pathname: '/users/usr'}}>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/users/usr/reclamos'>Reclamos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={{ pathname: '/users/usr/gastos'}}>Gastos Comunes</Link>
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
                
                <h1> <span className="badge badge-secondary">Crear Reclamo</span></h1>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link active" href='/users/usr/reclamos/crear'>Crear Reclamo</a>
                    </li>                    
                    <li className="nav-item">
                        <a className="nav-link active" href='/users/usr/reclamos/revisar'>Tus Reclamos</a>
                    </li>  
                </ul>
                <br/>
  
                <CrearReclamoForm addReclamo={this.addReclamo}/>

                </div>
            </div>  
                
        );
    };
}
