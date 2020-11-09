import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    state = {
        rut: 0,
        password: ""
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const datosLogin = {
            rut: this.state.rut,
            password: this.state.password
        };
        const res = await axios.post('http://localhost:4000/auth/signin', datosLogin);
        console.log("res", res);
    }

    onInputChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
        console.log(this.state.rut, this.state.password);
    }

    render() {
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
