import React from 'react';
import './CustomCarousel.scss';
import { Carousel } from "react-bootstrap";

function CustomCarousel() {
    return (
        <>
            <Carousel>
            <Carousel.Item  interval={3000}>
                <div className="row">
                    <div className="col-md-12 align-self-center">
                        <div className="custom-carousel">
                            <h2 className="h2 custom-carousel-ttl st">$390.7M</h2>
                            <h3 className="h3 custom-carousel-sttl st">Total value locked</h3>
                            <p className="p-big custom-carousel-p st">adipiscing elit. Curabitur id eros pulvinar, lacinia enim eu, egestas libero.</p>
                            <div className="custom-carousel-cta-wrap">
                                <button className="btn bttn bttn-primary st">Launch app</button>
                                <button className="btn bttn bttn-primary bttn-outline st">buy fast</button>
                            </div>
                        </div>
                    </div>                   
                </div>
            </Carousel.Item>
            <Carousel.Item  interval={3000}>
                <div className="row">
                    <div className="col-md-12 align-self-center">
                        <div className="custom-carousel">
                            <h2 className="h2 custom-carousel-ttl st">$4,242.98</h2>
                            <h3 className="h3 custom-carousel-sttl st">1 fast</h3>
                            <p className="p-big custom-carousel-p st">adipiscing elit. Curabitur id eros pulvinar, lacinia enim eu, egestas libero.</p>
                            <div className="custom-carousel-cta-wrap">
                                <button className="btn bttn bttn-primary st">Launch app</button>
                                <button className="btn bttn bttn-primary bttn-outline st">buy fast</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CustomCarousel
