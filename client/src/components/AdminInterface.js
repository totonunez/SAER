import React, { Component } from 'react'
import NavigationAdmin from './NavigationAdmin'
import axios from 'axios'

export default class AdminInterface extends Component {

    state = {
        rut: 0,
        cod_rol: ""
    }

    componentDidMount(props){
        this.setState({ 
            rut: this.props.location.state.rut,
            cod_rol: this.props.location.state.cod_rol
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('/auth');
        console.log(res);
        alert("bla bla ");
    }

    render() {
        return (
            <div>
                <NavigationAdmin/>
                <div>
                    <p className="text-center text-white altura-msj-cons title">
                        En construcción...
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <button className="btn btn-primary">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
