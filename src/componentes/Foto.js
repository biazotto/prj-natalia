import React, { Component } from 'react'
import config from './../fire-baseconfig'


class Foto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fotoPerfil: {

            }
        }

        config.syncState('fotoPerfil', {
            context: this,
            state: 'fotoPerfil',
            asArray: false
        }
        )

    }
    render() {
        return (
            <div>
                <div className='jumbotron text-center'>
                    <h1>Natalia Bueno</h1>
                    <img src={this.state.fotoPerfil.imagem} className='img-rounded' alt='Natalia Bueno' height='380' width='350' />
                    <p>Architect Student</p>
                </div>
            </div>
        )
    }
}



export default Foto