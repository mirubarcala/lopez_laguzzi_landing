
import React, { useState } from "react";
import './header.scss'
import { Link } from "react-router-dom"
import Logo from '../../img/logo.png'
import LogoMenu from '../../img/logo-menu.png'


const Header = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    return(
        <div id="header">
            <div id="header-desktop">
                <div>
                    <div>
                    <Link to="/">
                            <img src={Logo}/>
                            <span>
                                <h1>López Laguzzi</h1>
                                <h2>Constructora</h2>
                            </span>
                       </Link>
                    </div>
                    <div>
                        <Link to="obras-finalizadas">
                            <p>Obras terminadas</p>
                            <span></span>
                        </Link>
                        <Link to="obras-en-curso">
                            <p>Obras en curso</p>
                            <span></span>
                        </Link>
                        <Link to="proyectos-futuros">
                            <p>Proyectos futuros</p>
                            <span></span>

                        </Link>

                    </div>
                </div>
                </div>
                <div id="header-mobile">
                    <div>
                       <Link to="/">
                            <img src={Logo}/>
                            <span>
                                <h1>López Laguzzi</h1>
                                <h2>Constructora</h2>
                            </span>
                       </Link>
                    </div>
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
                            <Link to="obras-finalizadas">
                                <div>
                                <p>01</p>
                                <span>
                                    <p>obras</p>
                                    <p>terminadas</p>
                                </span>
                                </div>
                            </Link>
                            
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}
                        >
                             <Link to="obras-en-curso">
                                <div>
                                <p>02</p>
                                <span>
                                    <p>obras</p>
                                    <p>en curso</p>
                                </span>
                                </div>
                            </Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}

                        >
                            <Link to="proyectos-futuros">
                                <div>
                                <p>03</p>
                                <span>
                                    <p>proyectos</p>
                                    <p>futuros</p>
                                </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                        </nav>
                    ) : ""
                    }
 
                </div>
                {children}
            </div>
    )
}
export default Header
