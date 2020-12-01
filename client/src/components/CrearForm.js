import React, { Component } from 'react'

export default class CrearForm extends Component {

    state = {
        depto: '',
        fechaingreso: '',
        fechavencimiento: '',
        gastosdepto: '',
        gastosbodega: '',
        gastosestacionamiento: '',
        gastosagua: '',
        gastosvarios: ''
    }

    onSubmit = e => { 
        this.props.addGasto(this.state.depto, this.state.fechaingreso, this.state.fechavencimiento, this.state.gastosdepto, this.state.gastosbodega,this.state.gastosestacionamiento, this.state.gastosagua , this.state.gastosvarios)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }


    render(){
        return (
        <form onSubmit = {this.onSubmit}> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Depto:</span>
                </div>
                <input 
                type="text" 
                name="depto"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.depto}
                />
            </div>  
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Fecha Ingreso Gastos Comunes:</span>
                </div>
                <input 
                type="text"
                name="fechaingreso" 
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.fechaingreso}
                />
            </div> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Fecha Vencimiento Gastos Comunes:</span>
                </div>
                <input 
                type="text" 
                name="fechavencimiento"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.fechavencimiento}
                />
            </div> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Gastos Depto</span>
                    <span className="input-group-text">$</span>
                </div>
                <input 
                type="text" 
                name="gastosdepto"
                className="form-control" 
                aria-label="Amount (to the nearest dollar)"
                onChange={this.onChange}
                value={this.state.gastosdepto}
                />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Gastos Bodega</span>
                <span className="input-group-text">$</span>
              </div>
              <input 
              type="text" 
              name="gastosbodega"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.gastosbodega}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Gastos Estacionamiento</span>
                <span className="input-group-text">$</span>
              </div>
              <input 
              type="text" 
              name="gastosestacionamiento"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.gastosestacionamiento}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Gastos Agua</span>
                <span className="input-group-text">$</span>
              </div>
              <input 
              type="text" 
              name="gastosagua"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.gastosagua}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Gastos Varios</span>
                <span className="input-group-text">$</span>
              </div>
              <input 
              type="text" 
              name="gastosvarios"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.gastosvarios}
              />
            </div>
            <button type="submit" className="btn btn-primary">Subir Gastos a Planilla</button>
        </form>
        )
    }

}