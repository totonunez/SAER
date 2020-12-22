import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AdminCorreosAgregar extends Component {

    state = {
        changeData: false,
        correo: "",
        users_id: ""
    }

    onSubmit = async (e) => { 
        e.preventDefault();
        const correo = 
        {
            correo: this.state.correo,
            rut: this.state.users_id
        }
        const res = await axios.post("/correos/createCorreos" , correo)
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
                <h1> <span className="badge badge-secondary">Administrar Correos</span></h1>
                <ul className="nav nav-pills nav-fill row">
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/correos/revisar'>Revisar Correos</a>
                    </li>                    
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/correos/eliminar'>Eliminar Correos</a>
                    </li>
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/correos/agregar'>Agregar Correos</a>
                    </li>
                </ul>
                        <div className="card">
                            <div className="card-body">
                            <form onSubmit = {this.onSubmit}> 
                        <div className="input-group mb-3">
                            
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Correo</span>
                            </div>
                            <input 
                            type="text" 
                            name="correo"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.correo}            
                            />
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Rut del Usuario</span>
                            </div>
                            <input 
                            type="text" 
                            name="users_id"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.users_id}              
                            />
                        </div>  
                        <button type="submit" className="btn btn-primary">Crear Correo</button>
                    </form>
                    </div>
                </div>
                   </div>
    }

}

export default AdminCorreosAgregar;