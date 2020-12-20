import React, { Component } from 'react'

import Articulo from './Articulo.js';

class Articulos extends Component {
    render () {
        return this.props.articulos.map(articulo => <Articulo articulo={articulo} key={articulo.id}/>)   
    }
}

export default Articulos;