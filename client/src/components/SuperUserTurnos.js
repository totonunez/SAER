import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';

import TurnosC from "./TurnosC.js"

export default class SuperUserTurnos extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: "",
        verifyMessage: false,
        turnos: []
    };

    componentDidMount = async () => {
        const res = await axios.get("/turnos/getTurnosUser/")
        console.log(res);
        for(let i = 0; i<res.data.turno.length; i++){
            const turnos = {
                id: res.data.turno[i].id,
                horaInicio: res.data.turno[i].hora_inicio,
                horaTermino: res.data.turno[i].hora_termino,
                fechaInicio: res.data.turno[i].fecha_inicio,
                fechaTermino: res.data.turno[i].fecha_termino,
                userId: res.data.turno[i].user.rut               
                
            }
            this.setState({
                turnos: [...this.state.turnos, turnos]
            })
        }
        if(this.state.verify !== null){
            const res = await axios.get('/auth/sup/');
            this.setState({
                verify: res.data.resul,
                cod_rol: res.data.cod_rol,
                message: res.data.message
            });
        }
    };

    componentWillUnmount = () => {
        this.state.verifyMessage && alert(this.state.message);
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
                this.setState({
                    verifyMessage: true
                });
                return <Redirect to={{ pathname: '/users/'+this.state.cod_rol}}/>;
            case null:
                this.setState({
                    verifyMessage: true
                });
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
                        <Link className="navbar-brand" to="#">Hola, Conserje</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={{ pathname: '/users/sup'}}>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">        
                                    <Link className="nav-link" to={{ pathname: '/users/sup/bodega'}}>Bodega</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={{ pathname: '/users/sup/turnos'}}>Turnos</Link>
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
                <h1> <span className="badge badge-secondary">Mis Turnos</span></h1>
                <TurnosC turnos={this.state.turnos}/>
                </div>
            </div>  
        )
    };
}
