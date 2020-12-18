import React, { Component } from 'react'
import axios from 'axios'

export default class AdminDetalle extends Component {
    state = {
        pagoInteres: 0,
        montoMes: 0
    }

    componentDidMount = async () => {
        const res = await axios.get("http://localhost:4000/detallesGastos/"+this.props.gasto.id)
        res.data.result ? this.setState({
            pagoInteres: res.data.detallesGasto.pago_interes,
            montoMes: res.data.detallesGasto.monto_mes
        }) : this.setState({
            pagoInteres: "Sin datos",
            montoMes: "Sin datos"
        })
    }

    render() {
        return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Gasto Común</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Numero ° {this.props.gasto.id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Depto: {this.props.gasto.depto}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Pago de Interés: {this.state.pagoInteres}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Monto del Mes: {this.state.montoMes}</h6>
                    <div className="row">
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.props.volver}>Volver</button>
                    </div>
                </div>  
            </div>  
    }
}
