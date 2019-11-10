import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Noticias from './Noticias';
import Recomendados from './Recomendados';
import Proximos from './Proximos';
import Error from './Error'; 

class Router extends Component {
    
    render() { 
        return (  
            <BrowserRouter>

                <Switch>
                    {/*Paso la ruta y las noticias por props al componente Noticias.js*/}
                    <Route path="/"  exact render={() =>(
                        <Noticias
                            noticias = {this.props.noticias}
                        />
                    )}/>
                    <Route path="/recomendados"  exact component={Recomendados}></Route>
                    <Route path="/proximos"  exact component={Proximos}></Route>
                    <Route component={Error}/>
                </Switch>

            </BrowserRouter>
        );
    }
}
 
export default Router;