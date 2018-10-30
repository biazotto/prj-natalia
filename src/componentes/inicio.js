import React, { Component } from 'react';
import Foto from './Foto'
import About from './about'
import Contato from './contato';

class Inicio extends Component {
    render(){
    return (
        <div>
            
            <Foto />
            <About />
            <Contato />

        </div>
    );
}
}

export default Inicio