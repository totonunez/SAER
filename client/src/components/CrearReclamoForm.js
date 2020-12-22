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
            descripcion: this.state.descripcion,
            n_depto: this.state.departamento_id
        }
        const res = await axios.post("/reclamos/createReclamos", user)
        console.log(res);
        const respuesta = res.data.message
        const relation = {
            reclamos_id: res.data.reclamo.id,
            cod_rol: "usr"
        }
        let res2
        if (res.data.result){ 
            res2 =  await axios.post("/users/relationReclamo", relation)
        }

        res2.data.result ? alert(respuesta): alert(res.data.message)       

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }


    render(){
        return (
            <div className="card pt-3 pb-3 pl-3 pr-3">   
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
            <h6 className="card-subtitle mb-2 text-muted">En el siguiente recuadro debe escribir en que consiste el reclamo que usted quiere realizar:</h6>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
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