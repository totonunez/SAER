import React, { Component } from 'react'

import Correo from './Correo.js';

class Correos extends Component {
    render () {
        return this.props.articulos.map(articulo => <Correo articulo={articulo} key={articulo.id}/>)   
    }
}

export default Correos;