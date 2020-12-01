import React, { Component } from 'react'

import UGasto from './UGasto.js';

class UGastos extends Component {
    render () {
        return this.props.gastos.map(gasto => <UGasto gasto={gasto} key={gasto.id}/>);
    }
}

export default UGastos;