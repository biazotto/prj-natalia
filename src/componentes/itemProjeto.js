import React from 'react'

const ItemProjeto = props => {
    return (
        <div id='123'className='col-sm-4'>
            < div className="card">
                <div className="card-body">
                    <img className="card-img-top" src={props.conteudo.imagem} alt="Card image cap" ></img>
                    <h5 className="card-title">{props.conteudo.titulo}</h5>
                    <p className="card-text">{props.conteudo.descricao}</p>
                    
                </div>
            </div >
        </div>
    )
}

export default ItemProjeto

