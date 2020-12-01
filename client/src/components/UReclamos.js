import React, { Component } from 'react'

import UReclamo from './UReclamo.js';

class UReclamos extends Component {
    render () {
        return this.props.tasks.map(task => <UReclamo task={task} key={task.id}/>);
        
    }
}

export default UReclamos;