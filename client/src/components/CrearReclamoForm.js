import React, { Component } from 'react'

export default class CrearReclamoForm extends Component {

    state = {
        descripcion: ''
    }

    onSubmit = e => { 
        this.props.addReclamo(this.state.descripcion)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }


    render(){
        return (
        <form onSubmit = {this.onSubmit}> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">En el siguiente recuadro debe escribir <br/> en que consiste el reclamo que usted quiere realizar:</span>
                </div>
                <input 
                type="text" 
                name="descripcion"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.descripcion}
                />
            </div>  
            <button type="submit" className="btn btn-primary">Subir Reclamo</button>
        </form>
        )
    }

}