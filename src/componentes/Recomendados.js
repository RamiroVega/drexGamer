import React, { Component } from 'react';
import CardInfo from './CardInfo';

class Recomendados extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                 <CardInfo
                    titulo="Recomendados"
                />
            </div>
         );
    }
}
 
export default Recomendados;