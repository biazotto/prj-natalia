import React, { Component } from 'react'
import config from './../fire-baseconfig'
import ItemPortfolio from './itemPortfolio';

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
                <div id='portfolio' className='container-fluid text-center bg-grey'>
                    <h2>Portfolio</h2>
                    <h4>What I have created</h4>
                    <div className='row-text-center'>
                        {
                            Object.keys(this.state.portfolio)
                            .map(key =>{
                                return <ItemPortfolio key={key} conteudo={this.state.portfolio[key]} />
                            })
                        }
                       {/* <p>{JSON.stringify(Object.keys(this.state.portfolio))}</p> */}

                    </div>
                </div>
            </div >
        )
    }
}



export default Portfolio