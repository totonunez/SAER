import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {

    state = {
        rut: 0,
        password: "",
        cod_rol: ""
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const datosLogin = {
            rut: this.state.rut,
            password: this.state.password
        };
        const res = await axios.post('/auth/signin', datosLogin);
        try{
            this.setState({ 
                cod_rol: res.data.Usuario.cod_rol
            });
        }catch(e){
            console.log("error", e);
        };
        console.log("res", res);
        console.log(this.state.cod_rol);
    }

    onInputChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
        //console.log(this.state.rut, this.state.password);
    }

    render() {
        switch(this.state.cod_rol) {
            case "adm":
                return <Redirect to={{ pathname: '/users/adm', state: {rut: this.state.rut, cod_rol: this.state.cod_rol}}} />;
            case "sup":
                return <Redirect to={{ pathname: '/users/sup', state: {rut: this.state.rut, cod_rol: this.state.cod_rol}}} />;;
            case "usr":
                return <Redirect to={{ pathname: '/users/usr', state: {rut: this.state.rut, cod_rol: this.state.cod_rol}}} />;;
            default:
                break;
        };

        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Inicio de sesión</h4>
                    <br/>
                    <h5>Rut</h5>
                    <div className="form-group">
                        <input type="Tel" className="form-control" placeholder="Ej: 123456789" name="rut" onChange={this.onInputChange} required/>
                    </div>
                    <h5>Password</h5>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="********" name="password" onChange={this.onInputChange} required/>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
