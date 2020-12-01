import React, { Component } from 'react'

import Articulo from './Articulo.js';

class Articulos extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-12 text-center"/>
                    {this.props.articulos.map(articulo => <Articulo articulo={articulo} key={articulo.id}/>)}
            </div>        
        )
    }
}

export default Articulos;