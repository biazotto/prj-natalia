import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/cabecalho'
import Inicio from './componentes/inicio'
import About from './componentes/about'
import Portfolio from './componentes/portfolio'
<<<<<<< HEAD

=======
import Teste from './componentes/Teste'
>>>>>>> teste
import Contato from './componentes/contato'
// Painel admin
import Admin from './admin/admin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component = {Inicio}/>
          <Route path='/' exact component = {About}/>
          
          <Route path='/portfolio' component = {Portfolio}/>
<<<<<<< HEAD
          
=======
          <Route path='/teste' component = {Teste}/>
>>>>>>> teste
          <Route path='/contato' component ={Contato}/>
          
          <Route path='/admin' component = {Admin}/>



          <Rodape />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
