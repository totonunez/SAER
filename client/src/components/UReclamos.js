import React, { Component } from 'react'
import axios from 'axios';
import UReclamo from './UReclamo.js';

class UReclamos extends Component {

    state = {
        rut: ""
    }

    componentDidMount = async () => {
        const res = await axios.get("/users/id")
        this.setState({
            rut: res.data.rut
        })
        console.log(this.state.rut);
    }

    render () {
        return this.props.reclamos.filter(reclamo => reclamo.residente === this.state.rut).map(reclamo => <UReclamo reclamo={reclamo} key={reclamo.id}/>
        );
        
    }
}

export default UReclamos;