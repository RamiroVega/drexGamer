import React, { Component } from 'react';
import img1 from '../img/Anthem.jpg';

class Noticia extends Component {
    render() {
        return (
            <div>
                <h2 className="header center">Noticias</h2>
                <div className="col s12">                    
                    <div className="card horizontal row">
                        <div className="card-image col l4 m6 s6">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="card-stacked col l8 m6 s6">
                            <span className="card-title activator grey-text text-darken-4 center">Card Title</span>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.Culpa incididunt velit commodo velit sint exercitation ex nisi 
                                    magna veniam deserunt nulla est labore. Laboris adipisicing nulla sit officia reprehenderit aliqua est aute aliqua ullamco esse. 
                                    Cillum dolore Lorem eu aute labore consectetur officia elit dolore eiusmod veniam in. Ea nisi cupidatat consectetur minim nisi id dolor 
                                    aute dolore id exercitation cupidatat.</p>
                            </div>
                            <div className="card-action">
                                <a href="#!">Leer</a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Noticia;