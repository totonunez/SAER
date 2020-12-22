import React, { Component } from 'react';
import axios from 'axios';


class TurnoE extends Component {

    state = {
        eliminar: false
    }

    onSubmit = async e => {
        e.preventDefault()
        const res = await axios.delete("/turnos/" +this.props.turno.id)
        res.data.result && this.setState({
            eliminar: true
        })
        alert(res.data.message)
    }

    render(){
        if(!this.state.eliminar){
            return(
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Codigo del Turno: {this.props.turno.id} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Rut del Conserje: {this.props.turno.userId}</h6>
                        <button onClick={this.onSubmit}> Eliminar Articulo</button>
                    </div>
                </div>
            )
            }else{
                return(
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Turno Eliminado </h5>
                    </div>
                </div>
    
                )
            }
    }

}

export default TurnoE;



