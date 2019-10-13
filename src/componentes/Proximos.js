import React, { Component } from 'react';
import CardInfo from './CardInfo';

class Proximos extends Component {
    render() { 
        return ( 
            <div className="container">
                 <CardInfo
                    titulo="Proximamente"
                />
            </div>
         );
    }
}
 
export default Proximos;