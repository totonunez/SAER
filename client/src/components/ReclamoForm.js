import React, { Component } from 'react'

export default class ReclamoForm extends Component {

    state = {
        
        reclamo: ''

    }

    onSubmit = e => {
        e.preventDefault();
    }

    onChange = e => {

    }


    render(){
        return (
        <form onSubmit = {this.onSubmit}> 
            <input 
                className="form-control"
                name="respuesta"
                type="text" 
                placeholder="Escribir una Respuesta" 
                onChange={this.onChange}
            />                  
            <button type="submit" className="btn btn-primary my-1">Enviar Respuesta</button>
        </form>
        )
    }

}