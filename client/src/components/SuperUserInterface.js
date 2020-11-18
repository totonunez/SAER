import React, { Component } from 'react'
import NavigationSuperUser from './NavigationSuperUser'

export default class SuperUserInterface extends Component {
    render() {
        return (
            <div>
                <NavigationSuperUser/>
                <div>
                    <p className="text-center text-white altura-msj-cons title">
                        En construcción...
                    </p>
                </div>
            </div>
        )
    }
}
