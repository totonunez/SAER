import React, { Component } from 'react'

import TurnoE from './TurnoE.js';

class TurnosE extends Component {
    render () {
        return this.props.articulos.map(articulo => <TurnoE articulo={articulo} key={articulo.id}/>)
                 

    }
}

export default TurnosE;