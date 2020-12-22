import React, { Component } from 'react';
import axios from 'axios';

class Usuario extends Component {

    state = {
        changeData: 0,
        telefono_casa: '',
        telefono_celular: '',
        correo: '',
        password: '',
        auxTelefono_casa: '',
        auxTelefono_celular: '',
        auxCorreo: '',
        auxPassword: '',
        auxDepartamento: '',
        auxDepartamento2: '',
        auxDepartamento3: '',
        auxDepartamento4: ''
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

    changeCard0 = () => {
        this.setState({
            changeData: 0
        })
    }

    changeCard1 = () => {
        this.setState({
            changeData: 1
        })
    }

    changeCard2 = () => {
        this.setState({
            changeData: 2
        })
    }
    changeCard3 = () => {
        this.setState({
            changeData: 3
        })
    }

    changeCard4 = () => {
        this.setState({
            changeData: 4
        })
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
        
        
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    onSubmitDepto = async (e) => {
        e.preventDefault();
        const relation = {
            users_id: this.props.usuario.id,
            n_depto: this.state.auxDepartamento
        }
        const res = await axios.post("/users/relationDepto/", relation)
        alert(res.data.message);
        res.data.result && this.changeCard0()
    }

    onSubmitDeptoA = async (e) => {
        e.preventDefault();
        const relation = {
            users_id: this.props.usuario.id,
            n_depto: this.state.auxDepartamento2,
            newN_depto: this.state.auxDepartamento3
        }
        const res = await axios.put("/users/updateRelationDepto/", relation)
        alert(res.data);
        this.changeCard0()

    }

    onSubmitDeptoB = async (e) => {
        e.preventDefault();
        const relation = {
            users_id: this.props.usuario.id,
            n_depto: this.state.auxDepartamento4
        }
        const res = await axios.put("/users/deleteRelationDepto/", relation)
        alert(res.data.message);
        res.data.result && this.changeCard0()
    }

    

    render(){
        
        if(this.state.changeData === 0)
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                    <h6 className="card-subtitle mb-2 text-muted">Datos de Contacto</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Telefono de Casa: {this.state.telefono_casa} </li>
                        <li className="list-group-item">Telefono Celular: {this.state.telefono_celular} </li>
                        <li className="list-group-item">Correo: {this.state.correo} </li>
                        <li className="list-group-item">Contraseña: ********</li>
                    </ul>
                    <button className= "btn btn-primary ml-4" onClick={this.changeCard1}> Editar Datos</button>
                    {this.props.usuario.roles_id==="usr" && <button className= "btn btn-primary ml-4" onClick={this.changeCard2}> Vincular Departamento</button>}       
                    {this.props.usuario.roles_id==="usr" && <button className= "btn btn-primary ml-4" onClick={this.changeCard3}> Actualizar Departamento</button>}       
                    {this.props.usuario.roles_id==="usr" && <button className= "btn btn-primary ml-4" onClick={this.changeCard4}> Eliminar Departamento</button>}

                </div>
            </div>
        )
        else if(this.state.changeData === 1)
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
                placeholder="Ej: nombre@mail.com" 
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
            
            <button  className= "btn btn-primary ml-4" onClick={this.changeCard0}> Volver</button>
            
        </form>
        </div>
        </div>
            )
        else if(this.state.changeData === 2)  
                return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                <form onSubmit = {this.onSubmit}> 
             
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Departamento:</span>
                </div>
                <input 
                type="text" 
                name="auxDepartamento"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxDepartamento}              
                />
            </div>  
           
              
            <button type="submit" className="btn btn-primary" onClick={this.onSubmitDepto}>Ingresar Departamento</button>
            
            <button  className= "btn btn-primary ml-4" onClick={this.changeCard0}> Volver</button>
            
        </form>
        </div>
        </div>

        else if(this.state.changeData === 2)  
                return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                <form onSubmit = {this.onSubmit}> 
             
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Departamento:</span>
                </div>
                <input 
                type="text" 
                name="auxDepartamento"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxDepartamento}              
                />
            </div>  
           
              
            <button type="submit" className="btn btn-primary" onClick={this.onSubmitDepto}>Actualizar Departamento</button>
            
            <button  className= "btn btn-primary ml-4" onClick={this.changeCard0}> Volver</button>
            
        </form>
        </div>
        </div>
        else if(this.state.changeData === 3)  
                return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                <form onSubmit = {this.onSubmit}> 
             
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Departamento Antiguo:</span>
                </div>
                <input 
                type="text" 
                name="auxDepartamento2"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxDepartamento2}              
                />
            </div>  


            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Departamento Nuevo:</span>
                </div>
                <input 
                type="text" 
                name="auxDepartamento3"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxDepartamento3}              
                />
            </div>  
           
              
            <button type="submit" className="btn btn-primary" onClick={this.onSubmitDeptoA}>Actualizar Departamento</button>
            
            <button  className= "btn btn-primary ml-4" onClick={this.changeCard0}> Volver</button>
            
        </form>
        </div>
        </div>
       
        else if(this.state.changeData === 4)  
                return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Usuario: {this.props.usuario.rut} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {this.props.usuario.nombre} {this.props.usuario.apellido} </h6>
                <form onSubmit = {this.onSubmit}> 
             
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Departamento a Desvincular:</span>
                </div>
                <input 
                type="text" 
                name="auxDepartamento4"
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"  
                onChange={this.onChange}
                value={this.state.auxDepartamento4}              
                />
            </div>  
                
             
            <button type="submit" className="btn btn-primary" onClick={this.onSubmitDeptoB}>Eliminar Departamento</button>
            
            <button  className= "btn btn-primary ml-4" onClick={this.changeCard0}> Volver</button>
            
        </form>
        </div>
        </div>
    }

}

export default Usuario;