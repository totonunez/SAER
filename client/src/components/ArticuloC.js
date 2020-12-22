import React, { Component } from 'react';
import axios from 'axios';

class ArticuloC extends Component {

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
            return  <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Codigo de Producto: {this.props.articulo.codigo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.articulo.nombre}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Bodega: {this.props.articulo.bodega}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Volumen: {this.props.articulo.volumen} [m^3]</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Cantidad: {this.state.cantidad}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Fecha: {this.state.fechaModificacion}</h6>
                            <div className="row">
                            </div>
                        </div>
                    </div>                     
    }

}

export default ArticuloC;



