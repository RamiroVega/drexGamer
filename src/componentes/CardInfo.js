import React, { Component } from 'react';
import '../css/general.css';
import img1 from '../img/Anthem.jpg';


class CardInfo extends Component {
    // si la imagen no carga se carga una imagen predefinidad.
    onError=(e)=> { if (e.target.src !== this.urlToImage){
        e.target.onerror = null;
         e.target.src= img1;}
    }


   
    render() {
        const {urlToImage,url,title,description}= this.props.noticia; 
        return (
            
                <div className="col s12 m12 l4">                    
                    <div className="card hoverable">  
                        <div className="card-image">                        
                            <img src={urlToImage}  onError = {this.onError} alt=""/>
                            <a href={url} className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-book-open"></i></a>                           
                        </div>                                                     
                        <div className="card-content">   
                            <span className="card-title"><h5 className="textTituloCard center-align">{title}</h5></span>                             
                            <p className="section contener">
                               {description}
                            </p>                                                      
                        </div>
                    </div>             
                </div>                   
            
        );
    }
}

export default CardInfo;