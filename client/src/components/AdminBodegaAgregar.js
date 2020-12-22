import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AdminBodegaAgregar extends Component {

    state = {
        changeData: false,
        nombre: "",
        cantidad: "",
        volumen: "",
        cod_prod: "",
        bodega: ""
    }

    onSubmit = async (e) => { 
        e.preventDefault();
        const articulo = {
            nombre: this.state.nombre,
            cantidad: this.state.cantidad,
            volumen: this.state.volumen,
            cod_prod: this.state.cod_prod,
            n_bodega: this.state.bodega
        }
        const res = await axios.post("/productos/", articulo)
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
                <h1> <span className="badge badge-secondary">Administrar Bodega</span></h1>
                <ul className="nav nav-pills nav-fill row">
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/bodega/revisar'>Revisar articulos</a>
                    </li>                    
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/bodega/eliminar'>Eliminar articulos</a>
                    </li>
                    <li className="nav-item col-xs-12 col-md-4">
                        <a className="nav-link active" href='/users/adm/bodega/agregar'>Agregar articulos</a>
                    </li>
                </ul>
                        <div className="card">
                            <div className="card-body">
                            <form onSubmit = {this.onSubmit}> 
                        <div className="input-group mb-3">
                            
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                            </div>
                            <input 
                            type="text" 
                            name="nombre"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.nombre}            
                            />
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cantidad</span>
                            </div>
                            <input 
                            type="tel" 
                            name="cantidad"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.cantidad}              
                            />
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Volumen (metros cúbicos)</span>
                            </div>
                            <input 
                            type="text" 
                            name="volumen"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.volumen}              
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Código de producto</span>
                            </div>
                            <input 
                            type="text" 
                            name="cod_prod"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.cod_prod}              
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Bodega</span>
                            </div>
                            <input 
                            type="text" 
                            name="bodega"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"  
                            onChange={this.onChange}
                            value={this.state.bodega}              
                            />  
                        </div>
                        <button type="submit" className="btn btn-primary">Crear Articulo</button>
                    </form>
                    </div>
                </div>
                   </div>
    }

}

export default AdminBodegaAgregar;