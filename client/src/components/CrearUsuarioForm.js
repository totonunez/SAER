import React, { Component } from 'react'

export default class CrearUsuarioForm extends Component {

    state = {
      rut : '',
      nombre: '',
      apellido: '',
      telefono_casa: '',
      telefono_celular: '',
      roles_id: '',
      password: '',
      correo: ''
    }

    onSubmit = e => { 
        e.preventDefault();
        this.props.addUsuario(this.state.rut, this.state.nombre, this.state.apellido, this.state.telefono_casa, this.state.telefono_celular,this.state.roles_id, this.state.correo, this.state.password)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);     
    }


    render(){
        return (
        <form onSubmit = {this.onSubmit}> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Rut:</span>
                </div>
                <input 
                type="text" 
                name="rut"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.rut}
                />
            </div>  
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre:</span>
                </div>
                <input 
                type="text"
                name="nombre" 
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.nombre}
                />
            </div> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Apellido:</span>
                </div>
                <input 
                type="text" 
                name="apellido"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.apellido}
                />
            </div> 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Teléfono de Casa</span>
                </div>
                <input 
                type="text" 
                name="telefono_casa"
                className="form-control" 
                aria-label="Amount (to the nearest dollar)"
                onChange={this.onChange}
                value={this.state.telefono_casa}
                />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Teléfono Celular</span>
              </div>
              <input 
              type="text" 
              name="telefono_celular"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.telefono_celular}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Rol( 1: Admin ; 2: Conserje; 3: Usuario ):</span>
              </div>
              <input 
              type="text" 
              name="roles_id"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.roles_id}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Correo</span>
              </div>
              <input 
              type="text" 
              name="correo"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.correo}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Password</span>
              </div>
              <input 
              type="text" 
              name="password"
              className="form-control" 
              aria-label="Amount (to the nearest dollar)"
              onChange={this.onChange}
              value={this.state.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">Crear Usuario</button>
        </form>
        )
    }

}