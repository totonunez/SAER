import React, { Component } from 'react'

import UsuarioE from './UsuarioE.js';

class UsuariosE extends Component {
    render () {
        return this.props.usuarios.map(usuario => <UsuarioE usuario={usuario} key={usuario.id}/>);
    }
}

export default UsuariosE;