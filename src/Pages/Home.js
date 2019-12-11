import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel, CarouselItem} from "react-bootstrap";
import '../Styles/carrusel.css'

class Carrusel extends React.Component
{
    render()
    {
        return(
          <div className='carrusel'>

              <Carousel>
            <Carousel.Item>
              <img
                className="d-flex w-100" 
                src="https://falabella.scene7.com/is/image/FalabellaCO/3844865_1?$producto308$&wid=800&hei=800&qlt=70"
                //src={crash}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100 ;"
                src="https://falabella.scene7.com/is/image/FalabellaCO/4153271_1?$producto308$&wid=800&hei=800&qlt=70"
                //src={callduty}
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100 "
                src="https://falabella.scene7.com/is/image/FalabellaCO/4166549_1?$producto308$&wid=800&hei=800&qlt=70"
               // src={fifa}
                alt="Third slide"
              />
          
           
            </Carousel.Item>
          </Carousel>
          
          </div>
            
          );
    }
}
export default Carrusel;