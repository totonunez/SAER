import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';

import CrearForm from './CrearForm.js'
import gastos from './gastos.json'

export default class AdminGastosComunesCrear extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: "",
        gastos: gastos
    };

    addGasto = (depto,fechaingreso,fechavencimiento,gastosdepto,gastosbodega,gastosestacionamiento,gastosagua,gastosvarios) => {
        const newGasto = {
            id: this.state.gastos.length,
            depto: depto,
            fechaingreso: fechaingreso,
            fechavencimiento: fechavencimiento,
            gastosdepto: gastosdepto,
            gastosbodega: gastosbodega,
            gastosestacionamiento: gastosestacionamiento,
            gastosagua: gastosagua,
            gastosvarios: gastosvarios
        }
        this.setState({
            gastos: [...this.state.gastos, newGasto]
        })
    }

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
                                    <Link className="nav-link" to={{ pathname: '/users/adm/usuarios'}}>Gestion Usuarios</Link>
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
                  <h1> <span className="badge badge-secondary">Gestionar Gastos Comunes</span></h1>
                  <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                      <a className="nav-link active" href='/users/adm/gastos/cuenta'>Revisar Cuentas</a>
                    </li>                    
                    <li className="nav-item">
                        <a className="nav-link active" href='/users/adm/gastos/revisar'>Revisar Gastos Comunes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href='/users/adm/gastos/crear'>Ingresar Gastos Comunes</a>
                    </li>
                  </ul>
                  <h1> <span className="badge badge-light">Ingreso de Gastos Comunes</span></h1>

                  <CrearForm addGasto={this.addGasto}/>

                </div>
            </div>  
        )
    };
}
