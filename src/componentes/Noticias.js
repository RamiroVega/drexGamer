import React, { Component } from 'react';
import CardInfo from './CardInfo';

class Noticias extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <CardInfo
                    titulo="Noticias"
                />
            </div>
         );
    }
}
 
export default Noticias;