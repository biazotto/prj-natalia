import React from 'react'

const About = props => {
    return (

        <div id='services' className='container-fluid text-center'>
            <h2>Sobre Mim</h2>
            <p> There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour,
                or randomised words which don't look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
                generators on the Internet tend to repeat predefined chunks as necessary,</p>
            
            <br />
            <div className='row '>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-camera logo-small'></span>
                    <h4>Fotografia</h4>
                    
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-heart logo-small'></span>
                    <h4>Blue</h4>
                    
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-cutlery logo-small'></span>
                    <h4>Comer</h4>
                    
                </div>
            </div>
            <br /><br />
            <div className='row '>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-pencil logo-small'></span>
                    <h4>Desenhar</h4>
                    
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-music logo-small'></span>
                    <h4>Musicas</h4>
                    
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-education logo-small'></span>
                    <h4>Estudar</h4>
                    
                </div>
            </div>
        </div>
    )
}

export default About