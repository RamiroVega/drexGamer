import React from 'react';
import '../css/header.css';

const Header = () => {
    return ( 
        <div className="navbar-fixed">
            <nav className="prymaryColor">
                <div className="nav-wrapper container">

                    <a href="/" className="brand-logo center" >Drex Gamer</a>                    
                    <a href="#!" data-target="menuResponsive" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul className="left hide-on-med-and-down">
                        <li><a href="/">Noticias</a></li>
                        <li><a href="recomendados">Recomendados</a></li>
                        <li><a href="proximos">Proximos</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="menuResponsive">
                <li><a href="/">Noticias</a></li>
                <li><a href="recomendados">Recomendados</a></li>
                <li><a href="proximos">Proximos</a></li>
            </ul>
        </div>
    );
}
 
export default Header;