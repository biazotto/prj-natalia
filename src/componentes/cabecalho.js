import React from 'react'
import { Link } from 'react-router-dom'

const Cabecalho = props => {
  return (
    <div>
      <div className='jumbotron text-center'>
       
        
        <h1>Natalia Bueno</h1>
        
        <p>Architect Student</p>


      </div>
     <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand' to='/'>NB</Link>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/servicos'>Serviços</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/precos'>Preços</Link></li>
              <li><Link to='/contato'>Contato</Link></li>
            </ul>
          </div>
        </div>
      </nav> 

    </div>
  )
}

export default Cabecalho