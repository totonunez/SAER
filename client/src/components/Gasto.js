import React, { Component } from 'react';
import axios from 'axios';

class Gasto extends Component {

    state = {
        id: null,
        depto: null,
        fechaIngreso: null,
        fechaVencimiento: null,
        gastoDepto: null,
        gastoAgua: null,
        gastoBodega: null,
        gastoEstacionamiento: null,
        estado: false,
        changeEstado: false,
        changeCard: false
    }

    componentDidMount = (props) => {
        this.setState({
            id: this.props.gasto.id,
            depto: this.props.gasto.depto,
            fechaIngreso: this.props.gasto.fechaingreso,
            fechaVencimiento: this.props.gasto.fechavencimiento,
            gastoDepto:  this.props.gasto.gastosdepto,
            gastoAgua: this.props.gasto.gastosagua,
            gastoEstacionamiento: this.props.gasto.gastosestacionamiento,
            estado: this.props.gasto.gastosvarios
        })
    }

    changeEstado = async () => {
        let estado = this.state.estado ? false : true
        console.log(this.state.estado, estado);
        const updateEstado = {
            estado: estado,
            id: this.state.id
        }
        const res = await axios.put("/gastosComunes/updateEstadoGastosComunes", updateEstado)
        console.log(res);
        res.data.result && this.setState({
            estado: res.data.estado,
            changeEstado: res.data.estado
        })
        console.log(this.state.estado);
        alert(res.data.message)
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Gasto Común </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Numero ° {this.state.id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Depto: {this.state.depto}</h6>
                    <p className="card-text">Este Gasto Común corresponde a la fecha del: {this.state.fechaIngreso}</p>
                    <p className="card-text">Fecha de Vencimiento: {this.state.fechaVencimiento}</p>
                    <h6 className="card-subtitle mb-2 text-muted">Desglose de gastos:</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gasto Depto: {this.state.gastoDepto} </li>
                        <li className="list-group-item">Gasto Agua: {this.state.gastoAgua}</li>
                        <li className="list-group-item">Gasto Bodega: {this.state.gastoBodega}</li>
                        <li className="list-group-item">Gasto Estacionamiento: {this.state.gastoEstacionamiento}</li>
                        <li className="list-group-item mb-3">Estado: {this.state.estado ? <p className="mt-3">Pagado</p> : <p className="mt-3">No pagado</p>}</li>
                    </ul>
                    <div className="row">
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" /*onClick={this.toggleShow}*/> Editar Datos</button>
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.changeEstado}> Cambiar Estado</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Gasto;