import React, { Component } from 'react'

import ArticuloC from './ArticuloC.js';

class ArticulosC extends Component {
    render () {
        return this.props.articulos.map(articulo => <ArticuloC articulo={articulo} key={articulo.id}/>)   
    }
}

export default ArticulosC;