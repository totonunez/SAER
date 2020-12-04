import React, { Component } from 'react';
import axios from 'axios';

class Usuario extends Component {

    state = {
        changeData: false,
        telefono_casa: '',
        telefono_celular: '',
        correo: '',
        password: '',
        auxTelefono_casa: '',
        auxTelefono_celular: '',
        auxCorreo: '',
        auxPassword: ''
    }

    componentDidMount = (props) =>  {
        console.log(this.props.usuario);
        this.setState({
            telefono_casa: this.props.usuario.telefono_casa,
            telefono_celular: this.props.usuario.telefono_celular,
            correo: this.props.usuario.correo,
            password: this.props.usuario.password
        });
    }

    toggleShow = () => {
        this.setState({changeData: !this.state.changeData})
    }

    onSubmit = async (e, props) => { 
        e.preventDefault();
     /*   this.props.addReclamo(this.state.descripcion) */
        const editUsers = {
            telefono_casa: this.state.auxTelefono_casa,
            telefono_celular: this.state.auxTelefono_celular,
            correo: this.state.auxCorreo,
            password: this.state.auxPassword
        }
        const id = this.props.usuario.id
        const res = await axios.put("/users/"+id, editUsers)
        alert(res.data.message);
        res.data.resultado && this.setState({
            telefono_casa: this.state.auxTelefono_casa,
            telefono_celular: this.state.auxTelefono_celular,
            correo: this.state.auxCorreo,
            password: this.state.auxPassword
        })
        this.toggleShow()
        
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
                        <li className="list-group-item">Telefono de Casa: {this.state.telefono_casa} </li>
                        <li className="list-group-item">Telefono Celular: {this.state.telefono_celular} </li>
                        <li className="list-group-item">Correo: {this.state.correo} </li>
                        <li className="list-group-item">Contraseña: ********</li>
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
                <form onSubmit = {this.onSubmit}> 
            <div className="input-group mb-3">
                
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Telefono de Casa</span>
                </div>
                <input 
                type="text" 
                name="auxTelefono_casa"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"    
                onChange={this.onChange}
                value={this.state.auxTelefono_casa}            
                />
            </div>  
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">telefono Celular</span>
                </div>
                <input 
                type="text" 
                name="auxTelefono_celular"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxTelefono_celular}              
                />
            </div>  
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Correo</span>
                </div>
                <input 
                type="text" 
                name="auxCorreo"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxCorreo}              
                />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                </div>
                <input 
                type="password" 
                name="auxPassword"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxPassword}              
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