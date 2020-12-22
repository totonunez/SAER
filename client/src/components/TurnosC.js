import React, { Component } from 'react'

import TurnoC from './TurnoC.js';

class TurnosC extends Component {
    render () {
        return this.props.turnos.map(turno => <TurnoC turno={turno} key={turno.id}/>)   
    }
}

export default TurnosC;