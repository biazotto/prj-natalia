import React, { Component } from 'react'
import config from '../fire-baseconfig'
import SemFoto from './semFoto';



class Projeto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projeto: {}
        }

             
        
    }
    componentDidMount() {
        const { id } = this.props.match.params
        config.syncState(`portfolio/${id}`, {
            context: this,
            state: 'projeto',
            asArray: false
        }
        )
      }

    render() {
        
        return (
            <div>
                <SemFoto />

                <div className='container' align='center'>
                    <h1>{this.state.projeto.titulo}</h1>
                    <br />
                    <img src={this.state.projeto.imagem} alt='img' ></img>
                </div>
                <br />
                <div className="well" align='center'>
                    <p>{this.state.projeto.descricao}</p>
                </div>

            </div>


        )
    }
}

export default Projeto