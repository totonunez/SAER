import React, { Component } from 'react'

import Grafico from './Grafico.js';

class Graficos extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-12 text-center"/>
                    {this.props.articulos.map(grafico => <Grafico grafico={grafico} key={grafico.id}/>)}
            </div>        
        )
    }
}

export default Graficos;