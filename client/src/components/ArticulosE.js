import React, { Component } from 'react'

import Articulo from './ArticuloE.js';

class ArticulosE extends Component {
    render () {
        return this.props.articulos.map(articulo => <Articulo articulo={articulo} key={articulo.id}/>)
                 

    }
}

export default ArticulosE;