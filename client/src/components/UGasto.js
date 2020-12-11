import React, { Component } from 'react';

class UGasto extends Component {

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Gasto Común </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Numero ° {this.props.gasto.id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Depto: {this.props.gasto.depto}</h6>
                    <p className="card-text">Este Gasto Común corresponde a la fecha del: {this.props.gasto.fechaingreso}</p>
                    <p className="card-text">Fecha de Vencimiento: {this.props.gasto.fechavencimiento}</p>
                    <h6 className="card-subtitle mb-2 text-muted">Desglose de gastos:</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gasto Depto: {this.props.gasto.gastosdepto} </li>
                        <li className="list-group-item">Gasto Agua: {this.props.gasto.gastosagua}</li>
                        <li className="list-group-item">Gasto Bodega: {this.props.gasto.gastosbodega}</li>
                        <li className="list-group-item">Gasto Estacionamiento: {this.props.gasto.gastosestacionamiento}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default UGasto;