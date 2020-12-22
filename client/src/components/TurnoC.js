import React, { Component } from 'react';
import axios from 'axios';

class TurnoC extends Component {

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

    componentDidMount = async () => {
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
        return  <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Turno: {this.props.turno.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Hora Inicio: {this.state.horaInicio}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Hora Termino: {this.state.horaTermino}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Fecha Inicio: {this.state.fechaInicio}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Fecha Termino: {this.state.fechaTermino}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Rut Conserje: {this.props.turno.userId}</h6>
                        <div className="row">
                        </div>
                    </div>
                </div>
            
}

}

export default TurnoC;



