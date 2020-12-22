import React, { Component } from 'react'

import Turno from './Turno.js';

class Turnos extends Component {
    render () {
        return this.props.turnos.map(turno => <Turno turno={turno} key={turno.id}/>)   
    }
}

export default Turnos;