import React, { Component } from 'react'

import Reclamo from './Reclamo.js';

class Reclamos extends Component {
    render () {
        return this.props.tasks.map(task => <Reclamo task={task} key={task.id}/>);
    }
}

export default Reclamos;