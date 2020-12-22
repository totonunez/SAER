import React, { Component } from 'react';

import ReclamoForm from './ReclamoForm.js'

class Reclamo extends Component {

    state = {
        show: true 
    }

    render(){
        if(this.state.show){
            return <div>
                        <div className="card">
                            <div className="card-header">
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
                            <ReclamoForm task={this.props.task} /> 
                        </div>               
                    </div>
             
        }else{
            return <div>
                        <div className="card">
                            <div className="card-header">
                                Numero de reclamo: {this.props.task.id}
                                <div className="form-check">
                            </div> 
                            </div>                      
                        </div>               
                    </div>
            
        }
    }
}

export default Reclamo;