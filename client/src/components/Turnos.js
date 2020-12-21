import React, { Component } from 'react'

import Turno from './Turno.js';

class Turnos extends Component {
    render () {
        return this.props.articulos.map(articulo => <Turno articulo={articulo} key={articulo.id}/>)   
    }
}

export default Turnos;