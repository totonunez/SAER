import React, { Component } from 'react'

export default class NavigationSuperUser extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="#">Hola, Conserje</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
