import React, { Component } from 'react'

import CorreoE from './CorreoE.js';

class CorreosE extends Component {
    render () {
        return this.props.correos.map(correo => <CorreoE correo={correo} key={correo.id}/>)
                 

    }
}

export default CorreosE;