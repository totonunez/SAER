import React, { Component } from 'react';

class UReclamo extends Component {

    state = {
        show: true 
    }

    toggleShow = () => {
        this.setState({show: !this.state.show})
    }

    render(){
        if(this.state.show){
        return(
        <div>
            <div className="card">
                <div className="card-header ">
                    Numero de reclamo: {this.props.task.id}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>Descripción del reclamo: {this.props.task.descripcion} </p>
                     <footer className="blockquote-footer"> Residente que hizo el reclamo: {this.props.task.residente} </footer>
                    </blockquote>
                    <br/>
                    <blockquote className="blockquote mb-0">
                    <p>Respuesta Administración:  </p>
                    </blockquote>
                    <button onClick={this.toggleShow}> Finalizar Reclamo</button>
                </div>                  
            </div>               
        </div>
        )
    }else{
        return (
            <div>
            <div className="card">
                <div className="card-header">
                    Numero de reclamo: {this.props.task.id}
                    <div className="form-check">
                    <button onClick={this.toggleShow}> Abrir Reclamo</button>
                </div> 
                </div>                      
            </div>               
        </div>
        )
    }
    }
}

export default UReclamo;