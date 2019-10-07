import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Header from './componentes/Header';
import Router from './componentes/Router';
import Footer from './componentes/Footer';
import Slider from './componentes/Slider';



function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Router/>            
      <Footer/>
    </div>
  );
}

export default App;
