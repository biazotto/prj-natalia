import React from 'react'

const Projeto = props => {
    return (
        <div className='container'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel" align="center">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="./../maps.jpg" alt="Image" />
                        <div class="carousel-caption">
                        </div>
                    </div>
                    <div class="item">
                        <img src="./../maps.jpg" alt="Image" />
                        <div class="carousel-caption">
                        </div>
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span></a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span></a>
                <br />
            </div>
            <div className="col-sm-12">
                <div className='thumbnail'>
                    <div className="well" align = 'center'>
                        <p>DESCRIÇÃO DO PROJETO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projeto