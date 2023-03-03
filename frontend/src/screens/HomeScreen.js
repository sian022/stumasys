import React from "react";
import slide01 from '../static/slide01.png'
import slide02 from '../static/slide02.png'
import slide03 from '../static/slide03.png'

import Carousel from 'react-bootstrap/Carousel'

function HomeScreen() {
    return(
        <div className="row">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide01}
                    alt='First Slide'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide02}
                    alt='Second Slide'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide03}
                    alt='Third Slide'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeScreen