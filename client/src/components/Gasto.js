import React, { Component } from 'react';
import axios from 'axios';

import AdminAñadirDetalle from './AdminAñadirDetalle';
import AdminDetalle from './AdminDetalle';

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
        changeCard: 0,
        auxFechaIngreso: null,
        auxFechaVencimiento: null,
        auxGastoDepto: null,
        auxGastoAgua: null,
        auxGastoBodega: null,
        auxGastoEstacionamiento: null,
    }

    componentDidMount = (props) => {
        console.log(this.props.gastosbodega);
        this.setState({
            id: this.props.gasto.id,
            depto: this.props.gasto.depto,
            fechaIngreso: this.props.gasto.fechaingreso,
            fechaVencimiento: this.props.gasto.fechavencimiento,
            gastoBodega: this.props.gasto.gastosbodega,
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

    changeCardInfo = () => {
        this.setState({
            changeCard: 0
        })
    }

    changeCardEdit = () => {
        this.setState({
            changeCard: 1
        })
    }

    changeCardAddDetalle = () => {
        this.setState({
            changeCard: 2
        })
    }

    changeCardDetalle = () => {
        this.setState({
            changeCard: 3
        })
    }

    dropDetalle = async () => {
        const res = await axios.delete("http://localhost:4000/detallesGastos/deleteDetallesGastos/"+this.props.gasto.id)
        alert(res.data.message)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const updateGasto = {
            id: this.state.id,
            fecha_ingreso: this.state.auxFechaIngreso,
            fecha_vencimiento: this.state.auxFechaVencimiento,
            gasto_depto: this.state.auxGastoDepto,
            gasto_bodega: this.state.auxGastoBodega,
            gasto_estacionamiento: this.state.auxGastoEstacionamiento,
            gasto_agua: this.state.auxGastoAgua
        }
        const res = await axios.put("/gastosComunes/updateGastosComunes", updateGasto)
        res.data.result && this.setState({
            fechaIngreso: this.state.auxFechaIngreso,
            fechaVencimiento: this.state.auxFechaVencimiento,
            gastoDepto: this.state.auxGastoDepto,
            gastoBodega: this.state.auxGastoBodega,
            gastoEstacionamiento: this.state.auxGastoEstacionamiento,
            gastoAgua: this.state.auxGastoAgua
        })
        alert(res.data.message)
        res.data.result && this.changeCardInfo()
    }

    render(){
        if(this.state.changeCard === 1)
            return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Gasto Común</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Numero ° {this.state.id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Depto: {this.state.depto}</h6>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Fecha de ingreso:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxFechaIngreso"
                            className="form-control"
                            placeholder="AÑO-MES-DIA" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxFechaIngreso}            
                        />
                    </div>  
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Fecha de vencimiento:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxFechaVencimiento"
                            className="form-control"
                            placeholder="AÑO-MES-DIA" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxFechaVencimiento}            
                        />
                    </div> 
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Gasto de Depto:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxGastoDepto"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxGastoDepto}            
                        />
                    </div>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Gasto de agua:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxGastoAgua"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxGastoAgua}            
                        />
                    </div>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Gasto de bodega:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxGastoBodega"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxGastoBodega}            
                        />
                    </div>
                    <div className="input-group mb-3">                
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Gasto de estacionamiento:</span>
                        </div>
                        <input 
                            type="text" 
                            name="auxGastoEstacionamiento"
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"    
                            onChange={this.onChange}
                            value={this.state.auxGastoEstacionamiento}            
                        />
                    </div>  
                    <div className="row">
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.onSubmit}>Actualizar datos</button>
                        <button className="btn btn-primary col-xs-12 col-md-4 mr-3" onClick={this.changeCardInfo}>Volver</button>
                    </div>
                </div>  
            </div>
        else if(this.state.changeCard === 0)
            return <div className="card">
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
                            <li className="list-group-item mb-3 col-md-2">Estado: {this.state.estado ? "Pagado" : "No pagado"}</li>
                        </ul>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <button className="btn btn-secondary col-xs-12" onClick={this.changeCardDetalle}> Ver detalles</button>
                            </ol>
                        </nav>
                        <div className="row">
                            <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.changeCardEdit}> Editar Datos</button>
                            <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.changeEstado}> Cambiar Estado</button>
                            <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.changeCardAddDetalle}> Añadir Detalle</button>
                            <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.dropDetalle}> Eliminar detalle</button>
                        </div>
                    </div>
                </div>
        else if(this.state.changeCard === 2)  
            return <AdminAñadirDetalle gasto={this.props.gasto} volver = {this.changeCardInfo}/>
        else if(this.state.changeCard === 3) 
            return <AdminDetalle gasto={this.props.gasto} volver = {this.changeCardInfo}/>   
    }

}

export default Gasto;