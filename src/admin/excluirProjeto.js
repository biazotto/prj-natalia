import React, { Component } from 'react';
import config from '../fire-baseconfig';
import ItemExclusao from './itemExclusao';


class excluirProjeto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false,
            portfolio: {}
        }

        this.excluirProjeto = this.excluirProjeto.bind(this)

        config.syncState('portfolio', {
            context: this,
            state: 'portfolio',
            asArray: false
        }
        )

    }

    excluirProjeto(e) {
        var excluir = document.getElementsByName("projeto")
        for(let i = 0; i < excluir.length; i++){
            if(excluir[i].checked){
                config.remove('portfolio/' + excluir[i].id)
            }
        }
           
        alert("Projeto(s) excluído(s)")         
        e.preventDefault()
    }



    render() {
        if (this.state.estaGravando) {
            return (
                <div className='container'>
                    <p>Salvando...</p>
                </div>
            )
        }
        return (

            <div className='container'>
                <h2> Excluir Projeto </h2>
                <form onSubmit={this.excluirProjeto}>

                    <div className="custom-control custom-checkbox">
                        {
                            Object.keys(this.state.portfolio)
                                .map(key => {
                                    return (
                                        <div >
                                            <ItemExclusao key={key} id={key} conteudo={this.state.portfolio[key]} />
                                        </div>
                                    )
                                })
                        }
                    </div>
                    <button type="submit" className="btn btn-primary">Excluir Projetos</button>
                </form>
            </div >

        )
    }
}


export default excluirProjeto

