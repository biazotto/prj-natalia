import React from 'react'

const Projeto = props => {
    return (
<div>
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
                    <br/>
            </div>
            <div className="col-sm-12">
                <div className='thumbnail'>
                    <div className="well">
                        <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                             or randomised words which don't look even slightly believable.
                             If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                             anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
                              on the Internet tend to repeat predefined chunks as necessary, making this the f
                              irst true generator on the Internet. It uses a dictionary of over 200 Latin words
                              , combined with a handful of model sentence structures, to generate Lorem Ipsum
                               which looks reasonable. The generated Lorem Ipsum is therefore always free
                        from repetition, injected humour, or non-characteristic words etc....</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projeto