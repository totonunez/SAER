import React, { Component } from 'react'

import TurnoE from './TurnoE.js';

class TurnosE extends Component {
    render () {
        return this.props.turnos.map(turno => <TurnoE turno={turno} key={turno.id}/>)
                 

    }
}

export default TurnosE;