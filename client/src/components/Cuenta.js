import React, { Component } from 'react';


class Cuenta extends Component {

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Cuenta Corriente ° {this.props.cuenta.ncuenta} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Depto: {this.props.cuenta.depto}</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Abono: {this.props.cuenta.abono} </li>
                        <li className="list-group-item">Deuda Total:{this.props.cuenta.deudatotal} </li>
                        <li className="list-group-item">Total Pago: {this.props.cuenta.totalpago} </li>
                    </ul>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/users/adm/gastos/cuenta/historial">Historial de Pagos</a></li>
                        </ol>
                    </nav>
                </div> 
            </div> 
        )
    }

}

export default Cuenta;