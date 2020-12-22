import React, { Component } from 'react';
import axios from 'axios';

class Turno extends Component {

    state = {
        changeCard: 0,
        auxFechaInicio: "",
        auxFechaTermino: "",
        auxHoraInicio: "",
        auxHoraTermino: "",

        id: "",
        horaInicio: "",
        horaTermino: "",
        fechaInicio: "",
        fechaTermino: "",
        userId: ""
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.turno.id,
            horaInicio: this.props.turno.horaInicio,
            horaTermino: this.props.turno.horaTermino, 
            fechaInicio: this.props.turno.fechaInicio,
            fechaTermino: this.props.turno.fechaTermino, 
            userId: this.props.turno.userId
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
        const turno = {
            id: this.props.turno.id,
            hora_inicio: this.state.auxHoraInicio,
            hora_termino: this.state.auxHoraTermino,
            fecha_inicio: this.state.auxFechaInicio,
            fecha_termino: this.state.auxFechaTermino,
            rutConserje: this.props.turno.userId
        }
        const res = await axios.put("/turnos/updateTurnos", turno)
        res.data.result && this.setState({
            horaInicio: this.state.auxHoraInicio,
            horaTermino: this.state.auxHoraTermino,
            fechaInicio: this.state.auxFechaInicio,
            fechaTermino: this.state.auxFechaTermino
        })
        alert(res.data.message)
        this.changeCardArt()
    }

    render(){
        if(this.state.changeCard === 0)
        return  <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Turno: {this.props.turno.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Hora Inicio: {this.state.horaInicio}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Hora Termino: {this.state.horaTermino}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Fecha Inicio: {this.state.fechaInicio}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Fecha Termino: {this.state.fechaTermino}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Rut Conserje: {this.props.turno.userId}</h6>
                        <div className="row">
                            <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.changeCardEdit}>Editar Turno</button>
                        </div>
                    </div>
                </div>
    else if(this.state.changeCard === 1)    
        return  <div>
                    <div className="card">
                        <div className="cardBody pt-3 pb-3 pr-3 pl-3">
                            <h5 className="card-title">Turno: {this.props.turno.id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Nombre: </h6>
                            <form onSubmit = {this.onSubmit}> 
                                <div className="input-group mb-3"> 
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Hora de Inicio</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="auxHoraInicio"
                                        className="form-control" 
                                        aria-label="Default" 
                                        aria-describedby="inputGroup-sizing-default"    
                                        onChange={this.onChange}
                                        value={this.state.auxHoraInicio}            
                                    />
                                </div>
                                <div className="input-group mb-3"> 
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Hora de Termino</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="auxHoraTermino"
                                        className="form-control" 
                                        aria-label="Default" 
                                        aria-describedby="inputGroup-sizing-default"    
                                        onChange={this.onChange}
                                        value={this.state.auxHoraTermino}            
                                    />
                                </div>
                                <div className="input-group mb-3"> 
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Fecha de Inicio</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="auxFechaInicio"
                                        placeholder="AÑO-MES-DIA"
                                        className="form-control" 
                                        aria-label="Default" 
                                        aria-describedby="inputGroup-sizing-default"    
                                        onChange={this.onChange}
                                        value={this.state.auxFechaInicio}            
                                    />
                                </div>
                                <div className="input-group mb-3"> 
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Fecha de Termino</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="auxFechaTermino"
                                        placeholder="AÑO-MES-DIA"
                                        className="form-control" 
                                        aria-label="Default" 
                                        aria-describedby="inputGroup-sizing-default"    
                                        onChange={this.onChange}
                                        value={this.state.auxFechaTermino}            
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

export default Turno;



