import React, { Component } from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';


import ArticulosC from "./ArticulosC.js"

export default class SuperUserBodega extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: "",
        verifyMessage: false,
        articulos: []
    };

    componentDidMount = async () => {
        const res = await axios.get("/productos/")
        console.log(res);
        for(let i = 0; i<res.data.allProductos.length; i++){
            const articulos = {
                id: res.data.allProductos[i].id,
                nombre: res.data.allProductos[i].nombre,
                cantidad: res.data.allProductos[i].cantidad,
                codigo: res.data.allProductos[i].cod_prod,
                volumen: res.data.allProductos[i].volumen,
                bodega: res.data.allProductos[i].bodega.n_bodega,
                fechaModificacion: res.data.allProductos[i].fecha_modificacion,
                bodegaCapacidad: res.data.allProductos[i].bodega.capacidad,
                bodegaCapacidadActual: res.data.allProductos[i].bodega.cantidad_actual,
            }
            this.setState({
                articulos: [...this.state.articulos, articulos]
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
                <h1> <span className="badge badge-secondary">Administrar Bodega</span></h1>
                
                <ArticulosC articulos={this.state.articulos}/>
                </div>
            </div>  
        )
    };
}
