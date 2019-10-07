import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Noticias from './Noticias';
import Recomendados from './Recomendados';
import Proximos from './Proximos';

class Router extends Component {
    render() { 
        return (  
            <BrowserRouter>

                <Switch>
                    <Route path="/"  exact component={Noticias}></Route>
                    <Route path="/recomendados"  exact component={Recomendados}></Route>
                    <Route path="/proximos"  exact component={Proximos}></Route>
                </Switch>

            </BrowserRouter>
        );
    }
}
 
export default Router;