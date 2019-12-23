import React, { Component } from 'react';

class Login extends Component {
    render() { 
        return (  
            <div className="container">
                
                <div className="row">
                    <div className="col s12 m8 l6 offset-m2 offset-l3">
                        <div className="card z-depth-3">
                            <div className="card-action orange darken-1 center-align">
                                <h3>Login</h3>
                            </div>
                            
                            <div className="card-content">
                                
                                <div className="row">
                                    <div className="input-field col s8 offset-s2">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix" type="text" className="validate"/>
                                        <label htmlFor="icon_prefix">Usuario</label>
                                    </div>
                                    <div className="input-field col s8 offset-s2">    
                                        <i className="material-icons prefix fas fa-key"></i>
                                        <input id="icon_telephone" type="password" className="validate"/>
                                        <label htmlFor="password">Contraseña</label>
                                    </div>
                                    <div className="input-field col s6 m8 l4 offset-s3 offset-m2 offset-l4">
                                        <button className="btn waves-effect waves-orange prymaryColor bton-fb" type="submit"  
                                               name="action">Ingresar
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                   
                            </div>
                                                               
                            </div>                           

                        </div>
                    </div>
                </div>               
            </div>          
         );
    }
}
 
export default Login;