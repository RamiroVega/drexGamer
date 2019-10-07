import React from 'react';
import '../css/general.css';

const Footer = () => {
    return (
        <div>
             <footer className="page-footer prymaryColor center">
          <div className="container">
            <div className="row">
              <div className="col l4 s12">
                <h5 className="white-text">BlueCode</h5>
                <p className="grey-text text-lighten-4">Desarollador: Ramiro Vega Balaguera</p>
              </div>
              <div className="col l6 offset-l2 s12">
                <div className="container">
                    <h5 className="white-text">Redes Sociales</h5>
                    <div className="container">
                        <ul>                    
                            <div className="col s6"><a className="azul claro-1 right" href="#!"><i className="fab fa-linkedin-in fa-2x"></i></a></div>                    
                            <div className="col s6"><a className="azul claro-1 left" href="#!"><i className="fab fa-facebook fa-2x"></i></a></div>                                
                        </ul>
                    </div>                
                </div>                
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">
                 © 2014 Copyright
            </div>
          </div>
        </footer>
        </div>
    );
};

export default Footer;