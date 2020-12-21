import React, { Component } from 'react'

import CorreoE from './CorreoE.js';

class CorreosE extends Component {
    render () {
        return this.props.articulos.map(articulo => <CorreoE articulo={articulo} key={articulo.id}/>)
                 

    }
}

export default CorreosE;