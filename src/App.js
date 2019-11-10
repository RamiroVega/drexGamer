import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Header from './componentes/Header';
import Router from './componentes/Router';
import Footer from './componentes/Footer';
import Slider from './componentes/Slider';


class App extends Component {

  state= {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }
  consultarNoticias =() =>{
    let key = `bd6fd3ae9309444b8000fb7bbd1dcddf`;
    let categoria =`popularity`;
    let area =`videojuegos`;
    let url = `https://newsapi.org/v2/everything?q=${area}&from=2019-10-10&sortBy=${categoria}At&apiKey=${key}`;

    fetch(url)
        .then(respuesta => {
          return respuesta.json();
        })
        .then(noticias =>{
          this.setState({
            noticias: noticias.articles
          })          
        })
  }


 render(){
   return(
      <div className="App">
      <Header/>
      <Slider/>
      <Router
        /*Paso las noticias al componente router*/
        noticias = {this.state.noticias}
      />            
      <Footer/>
    </div>
   );
 }

}


export default App;
