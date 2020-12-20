import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';

class AdminAgregarArticulo extends Component {

    state = {
        changeData: false,
        telefono_casa: '',
        telefono_celular: '',
        correo: '',
        password: '',
        auxTelefono_casa: '',
        auxTelefono_celular: '',
        auxCorreo: '',
        auxPassword: ''
    }

    componentDidMount = (props) =>  {
    }

    toggleShow = () => {
        this.setState({changeData: !this.state.changeData})
    }

    onSubmit = async (e, props) => { 
        e.preventDefault();
        
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
                                <li className="nav-item active">
                                    <button type="button" className="btn btn-primary" onClick={this.logOut}>
                                        Cerrar sesión
                                    </button>  
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h1> <span className="badge badge-secondary">Administrar Bodega</span></h1>
                <ul className="nav nav-pills nav-fill row">
                    <li className="nav-item col-xs-12 col-md-4 mb-3">
                        <a className="nav-link active" href='/users/adm/gastos/cuenta'>Revisar articulos</a>
                    </li>                    
                    <li className="nav-item col-xs-12 col-md-4 mb-3">
                        <a className="nav-link active" href='/users/adm/gastos/revisar'>Eliminar articulos</a>
                    </li>
                    <li className="nav-item col-xs-12 col-md-4 mb-3">
                        <a className="nav-link active" href='/users/adm/bodega/agregar'>Agregar articulos</a>
                    </li>
                </ul>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Usuario:  </h5>
                                <h6 className="card-subtitle mb-2 text-muted">Nombre:  </h6>
                            <form onSubmit = {this.onSubmit}> 
                        <div className="input-group mb-3">
                            
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Telefono de Casa</span>
                            </div>
                            <input 
                            type="text" 
                            name="auxTelefono_casa"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxTelefono_casa}            
                            />
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">telefono Celular</span>
                            </div>
                            <input 
                            type="text" 
                            name="auxTelefono_celular"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.auxTelefono_celular}              
                            />
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Correo</span>
                            </div>
                            <input 
                            type="text" 
                            name="auxCorreo"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.auxCorreo}              
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                            </div>
                            <input 
                            type="password" 
                            name="auxPassword"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.auxPassword}              
                            />
                        </div>  
                        <button type="submit" className="btn btn-primary">Cambiar Datos</button>
                    </form>
                    </div>
                </div>
                   </div>
    }

}

export default AdminAgregarArticulo;