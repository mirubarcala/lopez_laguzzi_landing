
import React, { useState } from "react";
import './header.scss'
import Logo from '../../img/logo.png'
import LogoMenu from '../../img/logo-menu.png'


const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    return(
        <div id="header">
            <div id="header-desktop">
                <div>
                    <div>
                        <img src={Logo}/>
                        <span>
                            <h1>López Laguzzi</h1>
                            <h2>Constructora</h2>
                        </span>


                    </div>
                    <div>
                        <a onClick={() => (window.location.href = "/obras-terminadas")}>
                            <p className="selected">Obras terminadas</p>
                            <span></span>
                        </a>
                        <a>
                            <p>Obras en curso</p>
                            <span></span>
                        </a>
                        <a>
                            <p>Proyectos futuros</p>
                            <span></span>

                        </a>

                    </div>
                </div>
                </div>
                <div id="header-mobile">
                    <div>logo + Lopez Laguzzi</div>
                    <div>
                        <input
                            checked={isMenuOpen}
                            type="checkbox"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            id="burguer"
                        />
                        <label for="burguer" className="burguer" /* onClick={this.showMenu} */>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    {isMenuOpen ? (
                        <nav id="navbar_mobile">
                            <img src={LogoMenu}/>
                            <ul className="ul_menu">
                        <li
                            onClick={() => setIsMenuOpen(false)}
                        >
                            obras terminadas
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}

                        >
                            obras en curso
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}

                        >
                            proyectos futuros
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}

                        >

                        </li>
                    </ul>
                        </nav>
                    ) : ""
                    }
 
                </div>
            </div>
    )
}
export default Header
