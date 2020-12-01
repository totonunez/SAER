import React, { Component } from 'react';

class UsuarioE extends Component {

    state = {
        eliminar: false,
        
    }

    toggleShow = () => {
        this.setState({eliminar: !this.state.eliminar})
    }

    

    render(){
        if(!this.state.eliminar){

        
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                    <button onClick={this.toggleShow}> Eliminar Usuario</button>
                </div>
            </div>
        )
        }else{
            return(
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario Eliminado </h5>
                </div>
            </div>

            )
        }
    }

}

export default UsuarioE;