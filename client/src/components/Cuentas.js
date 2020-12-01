import React, { Component } from 'react'

import Cuenta from './Cuenta.js';

class Cuentas extends Component {
    render () {
        return this.props.cuentas.map(cuenta => <Cuenta cuenta={cuenta} key={cuenta.id}/>);
    }
}

export default Cuentas;