import React, { Component } from 'react';
import './header.scss'
import Logo from '../../img/logo.png'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div>
                    <div>
                        <img src={Logo}/>
                        <span>
                            <h1>López Laguzzi</h1>
                            <h2>Constructora</h2>
                        </span>


                    </div>
                    <div>
                        <p>Obras terminadas</p>
                        <p>Obras en curso</p>
                        <p>Proyectos futuros</p>

                    </div>
                </div>
            </div>
        )
    }
}
