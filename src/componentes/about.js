import React, { Component } from 'react'
import config from '../fire-baseconfig'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Perfil: {

            }
        }

        config.syncState('Perfil', {
            context: this,
            state: 'Perfil',
            asArray: false
        }
        )

    }

    render() {
        return (
        <div id='services' className='container'>
            <h2>Sobre Mim</h2>
            <p align="center"> {this.state.Perfil.about}</p>
            <br />
            <div className='container' align='center'>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-camera logo-small'></span>
                    <h4>Fotografia</h4>

                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-heart logo-small'></span>
                    <h4>Animais</h4>

                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-cutlery logo-small'></span>
                    <h4>Comer</h4>

                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-pencil logo-small'></span>
                    <h4>Desenhar</h4>

                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-music logo-small'></span>
                    <h4>Musicas</h4>

                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-education logo-small'></span>
                    <h4>Estudar</h4>

                </div>
            </div>
        </div>
        )
    }
}

export default About