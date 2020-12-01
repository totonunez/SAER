import React, { Component } from 'react';

class Usuario extends Component {

    state = {
        changeData: false,
        telefono_casa: '',
        telefono_celular: '',
        correo: ''
    }

    toggleShow = () => {
        this.setState({changeData: !this.state.changeData})
    }

    onSubmit = e => { 
     /*   this.props.addReclamo(this.state.descripcion) */
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    

    render(){
        if(!this.state.changeData){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                    <h6 className="card-subtitle mb-2 text-muted">Datos de Contacto:</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Telefono de Casa: {this.props.usuario.telefono_casa} </li>
                        <li className="list-group-item">Telefono Celular: {this.props.usuario.telefono_celular} </li>
                        <li className="list-group-item">Correo: {this.props.usuario.correo} </li>
                    </ul>
                    <button onClick={this.toggleShow}> Editar Datos</button>
                </div>
            </div>
        )
        }else{
            return(
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                <form> 
            <div className="input-group mb-3">
                
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Telefono de Casa</span>
                </div>
                <input 
                type="text" 
                name="telefono_casa"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"    
                onChange={this.onChange}
                value={this.state.telefono_casa}            
                />
            </div>  
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">telefono Celular</span>
                </div>
                <input 
                type="text" 
                name="telefono_celular"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.telefono_celular}              
                />
            </div>  
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Correo</span>
                </div>
                <input 
                type="text" 
                name="correo"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.correo}              
                />
            </div>  
            <button type="submit" className="btn btn-primary">Cambiar Datos</button>
        </form>
        </div>
        </div>
            )
        }
    }

}

export default Usuario;