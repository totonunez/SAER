import React, { Component } from 'react'
import NavigationUser from './NavigationUser'

export default class UserInterface extends Component {
    render() {
        return (
            <div>
                <NavigationUser/>
                <div>
                    <p className="text-center text-white altura-msj-cons title">
                        En construcción...
                    </p>
                </div>
            </div>
        )
    }
}
