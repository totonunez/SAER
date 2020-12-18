import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom';

class Cuenta extends Component {

    state = {
        nCuenta: 0,
        depto: 0,
        abono: 0,
        deudaTotal: 0,
        totalPago: 0,
        auxAbono: 0,
        auxDeudaTotal: 0,
        auxTotalPago: 0,
        nombreMovimiento: 0,
        monto: 0,
        numeroMovimiento: 0,
        changeCard: 0,
        route: false
    }

    componentDidMount = (props) => {
        this.setState({
            nCuenta: this.props.cuenta.ncuenta,
            depto: this.props.cuenta.depto,
            abono: this.props.cuenta.abono,
            deudaTotal: this.props.cuenta.deudatotal,
            totalPago: this.props.cuenta.totalpago
        })
    }

    changeEdit = () => {
        this.setState({
            changeCard: 1
        })
    }

    changeAddMov = () => {
        this.setState({
            changeCard: 2
        })    
    }

    changeDropMov = () => {
        this.setState({
            changeCard: 3
        })    
    }

    changeCard = () => {
        this.setState({
            changeCard: 0
        })    
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const updateCuenta = {
            n_cuenta: this.state.nCuenta,
            deuda_total: this.state.auxDeudaTotal,
            abono: this.state.auxAbono,
            total_pago: this.state.auxTotalPago,
        }
        const res = await axios.put("/cuentasCorrientes/updateCuentasCorrientes", updateCuenta)
        res.data.result && this.setState({
            deudaTotal: this.state.auxDeudaTotal,
            abono: this.state.auxAbono,
            totalPago: this.state.auxTotalPago
        })
        alert(res.data.message)
        res.data.result && this.changeCard()
    }

    onSubmitMov = async (e) => {
        e.preventDefault()
        const createMov = {
            nombre_movimiento: this.state.nombreMovimiento,
            monto: this.state.monto,
            cuentas_corrientes_id: this.props.cuenta.id
        }
        const res = await axios.post("/movimientos/createMovimientos", createMov)
        alert(res.data.message)
        res.data.result && this.changeCard()
    }

    onSubmitDropMov = async (e) => {
        const x = this.state.numeroMovimiento
        const res = await axios.delete("/movimientos/"+x)
        alert(res.data.message)
        res.data.result && this.changeCard()
    }

    route = () => {
        this.setState({
            route: true
        })
    }

    render(){
        if(this.state.route){return (<Redirect to={{ pathname: '/users/adm/gastos/cuenta/historial', state: {cuentaId: this.props.cuenta.id}}} />)}
        if(this.state.changeCard === 0)
            return <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Cuenta Corriente ° {this.state.nCuenta} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Depto: {this.state.depto}</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Abono: {this.state.abono} </li>
                            <li className="list-group-item">Deuda Total: {this.state.deudaTotal} </li>
                            <li className="list-group-item">Total Pago: {this.state.totalPago} </li>
                        </ul>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <button className="btn btn-secondary col-xs-12 col-md-2" onClick={this.route}> Historial de movimientos</button>
                            </ol>
                        </nav>
                        <div className="row">
                            <button className="btn btn-primary col-xs-12 col-md-3 mr-3" onClick={this.changeEdit}> Editar cuenta</button>
                            <button className="btn btn-primary col-xs-12 col-md-3 mr-3" onClick={this.changeAddMov}> Añadir movimiento</button>
                            <button className="btn btn-primary col-xs-12 col-md-3 mr-3" onClick={this.changeDropMov}> Eliminar movimiento</button>
                        </div>
                    </div> 
                </div>
        else if(this.state.changeCard === 1)
            return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Cuenta Corriente ° {this.state.nCuenta} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Depto: {this.state.depto}</h6>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Abono:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxAbono"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxAbono}            
                        />
                    </div>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Total Pago:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxTotalPago"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxTotalPago}            
                        />
                    </div>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Deuda Total:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxDeudaTotal"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxDeudaTotal}            
                        />
                    </div>
                    <div className="row">
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.onSubmit}> Enviar</button>
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.changeCard}> Volver</button>
                    </div>
                </div> 
        </div>       
        else if(this.state.changeCard === 2)
            return <div className="card">
            <div className="card-body">
                <h5 className="card-title">Cuenta Corriente ° {this.state.nCuenta} </h5>
                <h6 className="card-subtitle mb-2 text-muted">Depto: {this.state.depto}</h6>
                <div className="input-group mb-3">                
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre movimiento:</span>
                    </div>
                    <input 
                        type="text" 
                        name="nombreMovimiento"
                        className="form-control" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"    
                        onChange={this.onChange}
                        value={this.state.nombreMovimiento}            
                    />
                </div>
                <div className="input-group mb-3">                
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Monto:</span>
                    </div>
                    <input 
                        type="text" 
                        name="monto"
                        className="form-control" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"    
                        onChange={this.onChange}
                        value={this.state.monto}            
                    />
                </div>     
                <div className="row">
                    <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.onSubmitMov}> Enviar</button>
                    <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.changeCard}> Volver</button>
                </div>
                </div>
            </div>
        else if(this.state.changeCard === 3)
            return <div className="card">
            <div className="card-body">
                <h5 className="card-title">Cuenta Corriente ° {this.state.nCuenta} </h5>
                <h6 className="card-subtitle mb-2 text-muted">Depto: {this.state.depto}</h6>
                <div className="input-group mb-3">                
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">ID de movimiento:</span>
                    </div>
                    <input 
                        type="text" 
                        name="numeroMovimiento"
                        className="form-control" 
                        aria-label="Default" 
                        aria-describedby="inputGroup-sizing-default"    
                        onChange={this.onChange}
                        value={this.state.numeroMovimiento}            
                    />
                </div>  
                <div className="row">
                    <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.onSubmitDropMov}> Enviar</button>
                    <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.changeCard}> Volver</button>
                </div>
                </div>
            </div>    
    }

}

export default Cuenta;