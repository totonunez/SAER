import React, { Component } from 'react'
import axios from 'axios'

export default class CrearReclamoForm extends Component {

    state = {
        descripcion: "",
        departamento_id: ""
    }

    onSubmit = async e => { 
        e.preventDefault()
        const user = {
            descripcion: "",
            departamento_id: ""
        }
        const res = await axios.post("/reclamos/createReclamos", user)
        alert(res.data.message)

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }


    render(){
        return (
            <div className="card">   
        <form onSubmit = {this.onSubmit}> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Departamento:</span>
                </div>
                <input 
                type="text" 
                name="departamento_id"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.departamento_id}
                />
            </div>
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
        </div>
        )
    }

}