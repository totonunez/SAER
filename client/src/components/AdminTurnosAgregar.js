import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AdminTurnosAgregar extends Component {

    state = {
        horaInicio: "",
        horaTermino: "",
        fechaInicio: "",
        fechaTermino: "",
        rutCon: ""
    }

    onSubmit = async (e) => { 
        e.preventDefault();
        const turno = {
           hora_inicio: this.state.horaInicio,
           hora_termino: this.state.horaTermino,
           fecha_inicio: this.state.fechaInicio,
           fecha_termino: this.state.fechaTermino,
           rut: this.state.rutCon
        }
        const res = await axios.post("/turnos/createTurnos", turno)
        alert(res.data.message)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    

    render(){
            return <div>
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
                                <li className="nav-item">
                                    <Link className="nav-link" to={{ pathname: '/users/adm/turnos'}}>Turnos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={{ pathname: '/users/adm/correos'}}>Correos</Link>
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
                <h1> <span className="badge badge-secondary">Administrar Turnos</span></h1>
                <ul className="nav nav-pills nav-fill row">
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/turnos/revisar'>Revisar Turnos</a>
                    </li>                    
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/turnos/eliminar'>Eliminar Turnos</a>
                    </li>
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/turnos/agregar'>Crear Turnos</a>
                    </li>
                </ul>
                        <div className="card">
                            <div className="card-body">
                            <form onSubmit = {this.onSubmit}> 
                        <div className="input-group mb-3">
                            
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Hora de inicio:</span>
                            </div>
                            <input 
                            type="text" 
                            name="horaInicio"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.horaInicio}            
                            />
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Hora de termino</span>
                            </div>
                            <input 
                            type="text" 
                            name="horaTermino"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.horaTermino}              
                            />
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Fecha de inicio</span>
                            </div>
                            <input 
                            type="text" 
                            name="fechaInicio"
                            className="form-control" 
                            placeholder="AÑO-MES-DIA"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.fechaInicio}              
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Fecha de termino</span>
                            </div>
                            <input 
                            type="text" 
                            name="fechaTermino"
                            className="form-control" 
                            aria-label="Default" 
                            placeholder="AÑO-MES-DIA"
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.fechaTermino}              
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Rut de conserje: </span>
                            </div>
                            <input 
                            type="text" 
                            name="rutCon"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.rutCon}              
                            />
                        </div>  
                        <button type="submit" className="btn btn-primary">Crear Turno</button>
                    </form>
                    </div>
                </div>
                   </div>
    }

}

export default AdminTurnosAgregar;