import React, { Component } from 'react';


class Movimiento extends Component {

    render(){
        return(
            <ul className="list-group list-group-flush">
                <li className="list-group-item">id: {this.props.movimiento.id} - Tipo: {this.props.movimiento.nombre} - Monto: {this.props.movimiento.monto} </li>
            </ul>
        )
    }

}

export default Movimiento;