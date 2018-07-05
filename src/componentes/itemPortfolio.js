import React from 'react'

const ItemPortfolio = props => {
    return (
        <div className='col-sm-4 '>
            <div className='thumbnail'>
                <img src={props.conteudo.imagem} className='img-rounded' alt='Masp' height='380' width='350' />
                <p><strong>{props.conteudo.titulo}</strong></p>
                <p>{props.conteudo.descricao}</p>
            </div>
        </div>
    )
}

export default ItemPortfolio