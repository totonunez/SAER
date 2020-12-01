import React, { Component } from 'react'

import Usuario from './Usuario.js';

class Usuarios extends Component {
    render () {
        return this.props.usuarios.map(usuario => <Usuario usuario={usuario} key={usuario.id}/>);
    }
}

export default Usuarios;