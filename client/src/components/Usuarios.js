import React, { Component } from 'react'

import Usuario from './Usuario.js';

class Usuarios extends Component {
    componentDidMount = () => {
        console.log(this.props.usuarios);
    }
    render () {    
        return this.props.usuarios.map(usuario => <Usuario usuario = {usuario} key = {usuario.id} /> )
    }
}

export default Usuarios;