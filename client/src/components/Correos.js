import React, { Component } from 'react'

import Correo from './Correo.js';

class Correos extends Component {
    render () {
        return this.props.correos.map(correo => <Correo correo={correo} key={correo.id}/>)   
    }
}

export default Correos;