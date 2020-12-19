import React, { Component } from 'react'
import axios from 'axios'

export default class AdminAñadirDetalle extends Component {

    state = {
        pagoInteres: 0,
        montoMes: 0
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const newDetalle = {
            pago_interes: this.state.pagoInteres,
            monto_mes: this.state.montoMes,
            gastos_comunes_id: this.props.gasto.id
        }
        const res = await axios.post("/detallesGastos/createDetallesGastos", newDetalle)
        alert(res.data.message)
    }

    render() {
        return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Gasto Común</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Numero ° {this.props.gasto.id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Depto: {this.props.gasto.depto}</h6>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Pago de interés:</span>
                        </div>
                        <input 
                            type="tel" 
                            name="pagoInteres"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.pagoInteres}            
                        />
                    </div>  
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Monto del mes:</span>
                        </div>
                        <input 
                            type="tel" 
                            name="montoMes"
                            className="form-control"
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.montoMes}            
                        />
                    </div> 
                    <div className="row">
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.onSubmit}>Enviar datos</button>
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.props.volver}>Volver</button>
                    </div>
                </div>  
            </div>
    }
}
