import React, { Component } from 'react'
import NavigationAdmin from './NavigationAdmin'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class AdminInterface extends Component {

    state = {
        rut: 0,
        cod_rol: "",
        verify: false
    }

    componentDidMount = async () => {
        const res = await axios.get('/auth/adm/');
        this.setState({
            verify: res.data.resul
        });
    }

    componentWillUnmount = () => {
        alert("Su usuario no se encuentra autorizado para acceder a esta interfaz")
    }
    
    render() {
        if(this.state.verify){return (<Redirect to={{ pathname: '/users/sup'}}/>)}
        return (
            <div>
                <NavigationAdmin/>
                <div>
                    <p className="text-center text-white altura-msj-cons title">
                        En construcción...
                    </p>
                </div>
            </div>
        )
    }
}
