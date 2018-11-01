import React, { Component } from 'react';
import config, { storage } from '../fire-baseconfig';


class excluirProjeto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false,
        }

        this.gravaAbout = this.gravaAbout.bind(this)
    }

    gravaAbout(e) {

        { alert("Projeto(s) excluído(s)") }
        this.setState({ estaGravando: false })


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
                <form onSubmit={this.gravaAbout}>

                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Projeto 1</label>
                        <br />
                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                        <label class="custom-control-label" for="customCheck1">Projeto 2</label>
                        < br/>
                        <input type="checkbox" class="custom-control-input" id="customCheck3" />
                        <label class="custom-control-label" for="customCheck1">Projeto 3</label>
                        <br />
                    </div>
                    <button type="submit" className="btn btn-primary">Excluir Projetos</button>
                </form>
            </div>

        )
    }
}


export default excluirProjeto

