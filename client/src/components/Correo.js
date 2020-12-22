import React, { Component } from 'react';
import axios from 'axios';

class Correo extends Component {

    state = {
        changeCard: 0,
        auxCorreo: "",

        id: "",
        correo: "",
        users_id: ""
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.correo.id,
            correo: this.props.correo.correo,
            users_id: this.props.correo.users_id   
        })
    }

    changeCardEdit = () => {
        this.setState({
            changeCard: 1
        })
    }

    changeCardArt = () => {
        this.setState({
            changeCard: 0
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onSubmit = async e => {
        e.preventDefault()
        const correo = {
            id: this.props.correo.id,
            correo: this.state.auxCorreo,
            users_id: this.props.correo.users_id
        }
        const res = await axios.put("/correos/updateCorreos", correo)
        res.data.result && this.setState({
            
            correo: this.state.auxCorreo
        })
        alert(res.data.message)
        console.log(res.data.result);
        this.changeCardArt()
    }

    render(){
        if(this.state.changeCard === 0)
        return  <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">ID del Correo: {this.props.correo.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Correo: {this.state.correo}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Rut Usuario: {this.props.correo.users_id}</h6>
                        <div className="row">
                            <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.changeCardEdit}> Editar Correo</button>
                        </div>
                    </div>
                </div>
    else if(this.state.changeCard === 1)    
        return  <div>
                    <div className="card">
                        <div className="cardBody pt-3 pb-3 pr-3 pl-3">
                            <h5 className="card-title">ID del Correo: {this.props.correo.id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Correo Actual: {this.state.correo}</h6>
                            <form onSubmit = {this.onSubmit}> 
                                <div className="input-group mb-3"> 
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Nuevo Correo</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="auxCorreo"
                                        className="form-control" 
                                        aria-label="Default" 
                                        aria-describedby="inputGroup-sizing-default"    
                                        onChange={this.onChange}
                                        value={this.state.auxCorreo}            
                                    />
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-primary col-md-2 mr-2">Cambiar Datos</button>
                                    <button className="btn btn-primary col-md-2" onClick={this.changeCardArt}>Volver</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>          
}

}

export default Correo;



