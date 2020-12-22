import React, { Component } from 'react';
import axios from 'axios';


class CorreoE extends Component {

    state = {
        eliminar: false
    }

    onSubmit = async e => {
        e.preventDefault()
        const res = await axios.delete("/correos/"+this.props.correo.id)
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
                        <h5 className="card-title">ID del Correo: {this.props.correo.id} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Correo: {this.props.correo.correo}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Rut del Usuario: {this.props.correo.users_id}</h6>
                        <button onClick={this.onSubmit}> Eliminar Correo</button>
                    </div>
                </div>
            )
            }else{
                return(
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Articulo Eliminado </h5>
                    </div>
                </div>
    
                )
            }
    }

}

export default CorreoE;



