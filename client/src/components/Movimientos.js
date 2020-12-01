import React, { Component } from 'react'

import Movimiento from './Movimiento.js';

class Movimientos extends Component {
    render () {
        return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Historial de Pagos </h5>
                {this.props.movimientos.map(movimiento => <Movimiento movimiento={movimiento} key={movimiento.id}/>)}
            </div>
        </div>  
        
        )
    }
}

export default Movimientos;