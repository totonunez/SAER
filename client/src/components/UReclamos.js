import React, { Component } from 'react'

import UReclamo from './UReclamo.js';

class UReclamos extends Component {
    render () {
        return this.props.reclamos.map(reclamo => <UReclamo reclamo={reclamo} key={reclamo.id}/>);
        
    }
}

export default UReclamos;