import React, { Component } from 'react';
import axios from 'axios';


class ArticuloE extends Component {

    state = {
        eliminar: false
    }

    onSubmit = async e => {
        e.preventDefault()
        const res = await axios.delete("/productos/"+this.props.articulo.codigo)
        res.data.result && this.setState({
            eliminar: true
        })
        alert(res.data.message)
    }

    render(){
        if(!this.state.eliminar){
            return(
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Codigo de Producto: {this.props.articulo.codigo} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.articulo.nombre}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Bodega: {this.props.articulo.bodega}</h6>
                        <button onClick={this.onSubmit}> Eliminar Articulo</button>
                    </div>
                </div>
            )
            }else{
                return(
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Articulo Eliminado </h5>
                    </div>
                </div>
    
                )
            }
    }

}

export default ArticuloE;



