import React, { Component } from 'react'

import Gasto from './Gasto.js';

class Gastos extends Component {
    componentDidMount = () => {
        console.log(this.props.gastos);
    }
    render () {
        return this.props.gastos.map(gasto => <Gasto gasto={gasto} key={gasto.id}/>);
    }
}

export default Gastos;