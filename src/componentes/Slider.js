/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import '../css/general.css'
import img1 from '../img/ResidentEvil.jpg'
import img2 from '../img/Anthem.jpg'
import img3 from '../img/breakpointl.jpg'
import img4 from '../img/Warframe.jpg'


class Slider extends Component {
    render() {
        return (
            <div className="container">       
                <div class="slider">
                    <ul class="slides">
                    <li>
                        <img src={img1}/> 
                        <div className="caption center-align">
                        <h3 className="textPrimary">Resident Evil 2</h3>
                        <h5 class="light text-lighten-3 textPrimary">Delux Edition</h5>
                        </div>
                    </li>
                    <li>
                        <img src={img2}/> 
                        <div className="caption left-align">
                        <h3 className="textPrimary">Anthem</h3>
                        <h5 className="light textPrimary text-lighten-3">Ven de Aventura.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={img3}/> 
                        <div className="caption right-align">
                        <h3 className="textPrimary">Ghost Recon</h3>
                        <h5 className="light textPrimary text-lighten-3">BreackPoint.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={img4}/> 
                        <div className="caption center-align">
                        <h3 className="textPrimary">Warframe</h3>
                        <h5 className="light textPrimary text-lighten-3">Te Esperamos Tenno</h5>
                        </div>
                    </li>
                    </ul>
                </div>                                
            </div>
        );
    }
}

export default Slider;