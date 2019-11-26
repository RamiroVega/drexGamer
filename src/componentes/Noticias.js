import React, { Component } from 'react';
import CardInfo from './CardInfo';

class Noticias extends Component {    
    
    render() {       
        return ( 
            <div className="container"> 
                    <div className="container center"><h2>Noticias</h2></div>                
                 <div className="row">                 
                   {this.props.noticias.map(noticia =>(
                       <CardInfo
                            key = {noticia.url}
                            noticia= {noticia}
                            titulo = "Noticias"
                       />
                    ))}                   
                 </div>
            </div>
         );
    }
}
 
export default Noticias;