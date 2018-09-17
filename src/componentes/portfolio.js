import React, { Component } from 'react'
import config from './../fire-baseconfig'
import ItemPortfolio from './itemPortfolio';
import SemFoto from './semFoto';

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            portfolio: {

            }
        }

        config.syncState('portfolio', {
            context: this,
            state: 'portfolio',
            asArray: false
        }
        )

    }
    render() {
        return (
            <div>
                <SemFoto />
                <div id='portfolio' className='container-fluid text-center bg-grey'>
                    <h2>Portfolio</h2>
                    <h4>Meus Projetos</h4>
                    <div className='row-text-center'>
                        {
                            Object.keys(this.state.portfolio)
                                .map(key => {
                                    return (
                                        <div>
                                            <p>{key}</p>
                                            <ItemPortfolio key={key} conteudo={this.state.portfolio[key]} />
                                        </div>
                                    )
                                })
                        }

                    </div>

                </div>
            </div >
        )
    }
}



export default Portfolio