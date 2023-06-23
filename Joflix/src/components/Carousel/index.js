import Slider from "react-slick"
import "./carousel.css"
import React from 'react';

function Carousel({children}) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow:4,
    slidesToScroll:1,
    VariableWidth: true,
    adaptiveHeigth: true,
    speed: 300
    }
        return (
            <div>
                <Slider {...settings}>
                    {children}
                </Slider>
              
            </div>
    
   
  )
}

export default Carousel;
