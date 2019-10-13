import React, { Component } from 'react';
import img1 from '../img/Anthem.jpg';
import img2 from '../img/breakpointl.jpg';
import img3 from '../img/Warframe.jpg';
import '../css/general.css';


class CardInfo extends Component {
    render() {
        return (
            <div className="row">
                <h2 className="header center">{this.props.titulo}</h2>
                <div className="col s12 m12 l6">                    
                    <div className="card">  
                        <div className="card-image">                        
                            <img src={img1} alt=""/>
                            <a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-book-open"></i></a>                           
                        </div>                                                     
                        <div className="card-content">   
                            <span className="card-title"><h5 className="textTituloCard center-align">Qui aliquip consectetur laborum consequat ut cupidatat dolore duis Lorem non.</h5></span>                             
                            <p className="section">
                                Dolor aute consectetur reprehenderit ea.Occaecat id exercitation nisi quis exercitation in adipisicing.Laborum magna 
                                elit incididunt occaecat nisi ullamco sunt aliquip. Esse reprehenderit elit aute tempor veniam esse consectetur elit 
                                culpa culpa labore velit proident consectetur. Culpa incididunt fugiat velit cillum tempor ad reprehenderit eu ex est 
                                nisi anim laboris dolor. Esse aliquip aliqua ea enim do tempor voluptate nulla non ipsum quis cillum labore. Dolor tempor 
                                pariatur ea duis nisi eu enim dolor. Fugiat non consequat deserunt consectetur aliqua.
                            </p>                                                      
                        </div>
                    </div>             
                </div>
                <div className="col s12 m12 l6">                    
                    <div className="card">  
                        <div className="card-image">
                            <img src={img2} alt=""/>
                            <a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-book-open"></i></a>                            
                        </div>                                                     
                        <div className="card-content"> 
                            <span className="card-title"><h5 className="textTituloCard center-align">Id id quis enim non dolor qui ex fugiat fugiat.</h5></span>                               
                            <p className="section">
                                Dolor aute consectetur reprehenderit ea.Occaecat id exercitation nisi quis exercitation in adipisicing.Laborum magna 
                                elit incididunt occaecat nisi ullamco sunt aliquip. Esse reprehenderit elit aute tempor veniam esse consectetur elit 
                                culpa culpa labore velit proident consectetur. Culpa incididunt fugiat velit cillum tempor ad reprehenderit eu ex est 
                                nisi anim laboris dolor. Esse aliquip aliqua ea enim do tempor voluptate nulla non ipsum quis cillum labore. Dolor tempor 
                                pariatur ea duis nisi eu enim dolor. Fugiat non consequat deserunt consectetur aliqua.
                            </p>                                                      
                        </div>                
                    </div>             
                </div>
                <div className="col s12 m12 l6">                    
                    <div className="card">  
                        <div className="card-image">
                            <img src={img3} alt=""/>
                            <a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-book-open"></i></a>                        
                        </div>                                                     
                        <div className="card-content">   
                            <span className="card-title"><h5 className="textTituloCard center-align">Sint adipisicing deserunt exercitation laboris.</h5></span>                             
                            <p className="section">
                                Dolor aute consectetur reprehenderit ea.Occaecat id exercitation nisi quis exercitation in adipisicing.Laborum magna 
                                elit incididunt occaecat nisi ullamco sunt aliquip. Esse reprehenderit elit aute tempor veniam esse consectetur elit 
                                culpa culpa labore velit proident consectetur. Culpa incididunt fugiat velit cillum tempor ad reprehenderit eu ex est 
                                nisi anim laboris dolor. Esse aliquip aliqua ea enim do tempor voluptate nulla non ipsum quis cillum labore. Dolor tempor 
                                pariatur ea duis nisi eu enim dolor. Fugiat non consequat deserunt consectetur aliqua.
                            </p>                                                      
                        </div>                        
                    </div>             
                </div> 
                <div className="col s12 m12 l6">                    
                    <div className="card">  
                        <div className="card-image">
                            <img src={img3} alt=""/>
                            <a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-book-open"></i></a>
                        </div>                                                     
                        <div className="card-content">
                            <span className="card-title"><h5 className="textTituloCard center-align">Nostrud veniam laborum culpa labore nisi et eiusmod officia qui fugiat aliqua mollit quis.</h5></span>                                
                            <p className="section"> 
                                Dolor aute consectetur reprehenderit ea.Occaecat id exercitation nisi quis exercitation in adipisicing.Laborum magna 
                                elit incididunt occaecat nisi ullamco sunt aliquip. Esse reprehenderit elit aute tempor veniam esse consectetur elit 
                                culpa culpa labore velit proident consectetur. Culpa incididunt fugiat velit cillum tempor ad reprehenderit eu ex est 
                                nisi anim laboris dolor. Esse aliquip aliqua ea enim do tempor voluptate nulla non ipsum quis cillum labore. Dolor tempor 
                                pariatur ea duis nisi eu enim dolor. Fugiat non consequat deserunt consectetur aliqua.
                            </p>                                                      
                        </div>                        
                    </div>             
                </div>
                <div className="col s12 m12 l6">                    
                    <div className="card">  
                        <div className="card-image">
                            <img src={img1} alt=""/>
                            <a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-book-open"></i></a>
                        </div>                                                     
                        <div className="card-content">
                            <span className="card-title"><h5 className="textTituloCard center-align">Nulla ad pariatur veniam magna enim sunt cillum do.</h5></span>                                
                            <p className="section">
                                Dolor aute consectetur reprehenderit ea.Occaecat id exercitation nisi quis exercitation in adipisicing.Laborum magna 
                                elit incididunt occaecat nisi ullamco sunt aliquip. Esse reprehenderit elit aute tempor veniam esse consectetur elit 
                                culpa culpa labore velit proident consectetur. Culpa incididunt fugiat velit cillum tempor ad reprehenderit eu ex est 
                                nisi anim laboris dolor. Esse aliquip aliqua ea enim do tempor voluptate nulla non ipsum quis cillum labore. Dolor tempor 
                                pariatur ea duis nisi eu enim dolor. Fugiat non consequat deserunt consectetur aliqua.
                            </p>                                                      
                        </div>                       
                    </div>             
                </div>
                <div className="col s12 m12 l6">                    
                    <div className="card">  
                        <div className="card-image">
                            <img src={img2} alt=""/>  
                            <a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-book-open"></i></a>                            
                        </div>                                                 
                        <div className="card-content">   
                            <span className="card-title"><h5 className="textTituloCard center-align">Consequat ea et adipisicing quis.</h5></span>                        
                            <p className="section"> 
                                Dolor aute consectetur reprehenderit ea.Occaecat id exercitation nisi quis exercitation in adipisicing.Laborum magna 
                                elit incididunt occaecat nisi ullamco sunt aliquip. Esse reprehenderit elit aute tempor veniam esse consectetur elit 
                                culpa culpa labore velit proident consectetur. Culpa incididunt fugiat velit cillum tempor ad reprehenderit eu ex est 
                                nisi anim laboris dolor. Esse aliquip aliqua ea enim do tempor voluptate nulla non ipsum quis cillum labore. Dolor tempor 
                                pariatur ea duis nisi eu enim dolor. Fugiat non consequat deserunt consectetur aliqua.
                            </p>                                                      
                        </div>                       
                    </div>             
                </div>               
            </div>
        );
    }
}

export default CardInfo;