import React, { Component } from 'react';
import config, { storage } from '../fire-baseconfig';


class alterarAbout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false,
        }

        this.gravaAbout = this.gravaAbout.bind(this)
    }

    gravaAbout(e) {

        this.setState({ estaGravando: true })
        const texto = this.about.value
        console.log(texto)

    
        { alert("About alterado com sucesso!") }
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
                <h2> Alterar About </h2>
                <form onSubmit={this.gravaAbout}>

                    <label htmlFor="about">Digite seu novo Sobre Mim</label>
                    <br />
                    <textarea type= 'text' className="form-control" id="about" ref={(ref) => this.about = ref} rows="4" />
                    <br />
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>

        )
    }
}


export default alterarAbout

