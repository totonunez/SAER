import React, { Component } from 'react';
import axios from 'axios';

class Articulo extends Component {

    state = {
        changeCard: 0,
        auxCantidad: "",
        cantidad: "",
        capacidad: 0,
        auxCapacidad: "",
        fechaModificacion: "",
        cantidadActual: 0
    }

    componentDidMount = () => {
        this.setState({
            cantidad: this.props.articulo.cantidad,
            fechaModificacion: this.props.articulo.fechaModificacion,
            cantidadActual: this.props.articulo.bodegaCapacidadActual
        })
    }

    changeCardEdit = () => {
        this.setState({
            changeCard: 1
        })
    }

    changeCardInfo = async () => {
        const res = await axios.get("/bodegas/"+this.props.articulo.bodega)
        console.log(res.data.bodega);
        res.data.result && this.setState({
            cantidadActual: res.data.bodega.cantidad_actual
        })
        this.setState({
            changeCard: 2
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
        const producto = {
            cod_prod: this.props.articulo.codigo,
            cantidad: this.state.auxCantidad
        }
        const res = await axios.put("/productos/", producto)
        res.data.result && this.setState({
            cantidad: this.state.auxCantidad,
            fechaModificacion: res.data.productoFecha.fecha_modificacion,
            cantidadActual: res.data.cant,
            changeCard: 0
        })
        alert(res.data.message)
    }

    render(){
        if(this.state.changeCard === 0)
            return  <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Codigo de Producto: {this.props.articulo.codigo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.articulo.nombre}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Bodega: {this.props.articulo.bodega}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Volumen: {this.props.articulo.volumen} [m^3]</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Cantidad: {this.state.cantidad}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Fecha: {this.state.fechaModificacion}</h6>
                            <div className="row">
                                <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.changeCardEdit}> Editar cantidad</button>
                                <button className="btn btn-primary col-xs-12 col-md-2 mr-3" onClick={this.changeCardInfo}> Info. Bodega</button>
                            </div>
                        </div>
                    </div>
        else if(this.state.changeCard === 1)    
            return  <div>
                        <div className="card">
                            <div className="cardBody pt-3 pb-3 pr-3 pl-3">
                                <h5 className="card-title">Codigo de Producto: {this.props.articulo.codigo}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.articulo.nombre}</h6>
                                <form onSubmit = {this.onSubmit}> 
                                    <div className="input-group mb-3"> 
                                        <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Cantidad</span>
                                        </div>
                                        <input 
                                            type="text" 
                                            name="auxCantidad"
                                            className="form-control" 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-default"    
                                            onChange={this.onChange}
                                            value={this.state.auxCantidad}            
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
        else if(this.state.changeCard === 2)    
            return  <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Bodega: {this.props.articulo.bodega}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Capacidad Máxima: {this.props.articulo.bodegaCapacidad}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Cantidad Actual: {this.state.cantidadActual}</h6>
                            <div className="row">
                                <button className="btn btn-primary col-md-2" onClick={this.changeCardArt}>Volver</button>
                            </div>
                        </div>
                    </div>                   
    }

}

export default Articulo;



