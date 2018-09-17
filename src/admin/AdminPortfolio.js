import React, { Component } from 'react';
import config, { storage } from '../fire-baseconfig';


class AdminPortfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false,
        }

        this.gravaPortfolio = this.gravaPortfolio.bind(this)
    }

    gravaPortfolio(e) {
        const itemPortfolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            
        }
        this.setState({ estaGravando: true })
        const arquivo = this.imagem.files[0]
        const { name, size, type } = arquivo


        const ref = storage.ref(name)
        ref.put(arquivo)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const novoPortfolio = {
                            titulo: itemPortfolio.titulo,
                            descricao: itemPortfolio.descricao,
                            imagem: downloadURL
                        }
                        console.log(novoPortfolio)
                        config.push('portfolio', {
                            data: novoPortfolio
                        })

                        { alert("Projeto salvo com sucesso!") }
                        this.setState({ estaGravando: false })
                    })
            })

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
                <h2> AdminPortfolio </h2>
                <form onSubmit={this.gravaPortfolio} >
                    <div className="form-group">
                        <label htmlFor="Titulo">Titulo</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" ref={(ref) => this.titulo = ref} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Selecione a Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />

                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div >
        )
    }
}


export default AdminPortfolio

