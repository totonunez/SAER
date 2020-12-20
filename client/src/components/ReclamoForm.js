import React, { Component } from 'react'
import axios from 'axios'


export default class ReclamoForm extends Component {

    state = {
        reclamo: '',
        respuesta: '',
        changeCard: false
    }

    componentDidMount = async () => {
        const res = await axios.get("/reclamos/"+this.props.task.id)
        if(res.data.reclamo.respuesta !== this.state.respuesta){
            this.setState({
                respuesta: res.data.reclamo.respuesta,
                changeCard: true
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const relation = {
            reclamos_id: this.props.task.reclamos_id
        }
        const respuesta = {
            respuesta: this.state.reclamo,
            n_reclamo: this.props.task.id
        }
        let res = await axios.post("/users/RelationReclamo", relation);
        if(res.data.result){
            res = await axios.put("/reclamos/updateReclamos", respuesta)
            this.setState({
                respuesta: this.state.reclamo,
                changeCard: true
            })
        }    
        alert(res.data.message)
    }    

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })    
    }

    render(){
        if(!this.state.changeCard)
            return <form onSubmit = {this.onSubmit}> 
                        <input 
     s                       className="form-control"
                            name="reclamo"
                            type="text" 
                            placeholder="Escribir una Respuesta"
                            onChange={this.onChange}
                            required
                        />                  
                        <button type="submit" className="btn btn-primary my-1">Enviar Respuesta</button>
                    </form>                   
        else
            return <p className="ml-3">{this.state.respuesta}</p>
    }

}