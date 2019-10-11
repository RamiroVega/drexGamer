import React from 'react';
import '../css/general.css';
import img1 from '../img/ResidentEvil.jpg';
import img2 from '../img/Anthem.jpg';
 
 const Sidenav = () => {
     return (
         <div>
             <nav className="prymaryColor"></nav>
                <ul id="slide-out">
                    <li>
                        <div className="user-view ">
                            <div className="background">
                                <img src={img2} alt=""/>
                            </div>
                            <a href="#!"><img className="circle" src={img1} alt=""/></a>
                            <a href="#!"><span className="white-text name center"><h3>Drex Gamer</h3></span></a>
                            <div className="container">
                                <div className="row">
                                    <a href="#!" className="col s6 white-text redes-sidenav"><i className="right fab fa-linkedin-in fa-2x"/></a>
                                    <a href="#!" className="col s6 white-text redes-sidenav"><i className="left fab fa-facebook fa-2x"/></a>
                                </div>    
                            </div>                      
                        </div>
                    </li>
                    <li><a href="/"><i className="material-icons"><i className="fas fa-newspaper"></i></i>Noticias</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="recomendados"><i className="small material-icons">star</i>Recomendados</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect" href="proximos"><i className="small material-icons">local_shipping</i>Proximos</a></li>
                </ul>
         </div>
     );
 };
 
 export default Sidenav;