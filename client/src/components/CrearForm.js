import React, { Component } from 'react'
import axios from 'axios'

export default class CrearForm extends Component {

    state = {
        depto: '',
        fechaingreso: '',
        fechavencimiento: '',
        gastosdepto: '',
        gastosbodega: '',
        gastosestacionamiento: '',
        gastosagua: '',
        porcentajeInteres: '',
        message: false
    }

    onSubmit = async e => { 
        e.preventDefault();
        const res = await axios.get("http://localhost:4000/departamentos/"+this.state.depto)
        res.data.result ? this.props.addGasto(
          res.data.depto.id,
          this.state.fechaingreso,
          this.state.fechavencimiento,
          this.state.gastosdepto,
          this.state.gastosbodega,
          this.state.gastosestacionamiento,
          this.state.gastosagua, 
          this.state.porcentajeInteres
        ) : this.setState({
          message: true
        })
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
                placeholder="AÑO-MES-DIA"
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
                placeholder="AÑO-MES-DIA"
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
                <span className="input-group-text">Porcentaje de interes</span>
                <span className="input-group-text">$</span>
              </div>
              <input 
              type="text" 
              name="porcentajeInteres"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.porcentajeInteres}
              />
            </div>
            <button type="submit" className="btn btn-primary">Subir Gastos a Planilla</button>
            {this.state.message && <p className="text-white mt-2">El departamento no existe</p> }
        </form>
        )
    }

}