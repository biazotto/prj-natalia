import React from 'react'

const ItemPortfolio = props => {
    return (
        <div className='thumbnail'>
            <img src='paris.jpg' alt='' width='400' height='300' />
            <p><strong>{this.state.portfolio.titulo}</strong></p>
            <p>{this.state.portfolio.descricao}</p>
        </div>
    )
}

export default ItemPortfolio

