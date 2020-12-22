import React, { Component } from 'react';

class UReclamo extends Component {

   

    render(){
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
                </div>                  
            </div>               
        </div>
        )
   
    }
}

export default UReclamo;