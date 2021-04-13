import React from 'react';
import './CustomCarousel.css';
import { Carousel } from "react-bootstrap";

function CustomCarousel() {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <div className="custom-carousel">
                            <h3 className="custom-carousel-ttl">$390.7M</h3>
                            <h4 className="custom-carousel-sttl">Total value locked</h4>
                            <p className="custom-carousel-p">adipiscing elit. Curabitur id eros pulvinar, lacinia enim eu, egestas libero.</p>
                            <div className="custom-carousel-cta-wrap">
                                <button className="btn bttn bttn-primary st">Launch app</button>
                                <button className="btn bttn bttn-primary bttn-outline st">buy fast</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <div className="custom-carousel">
                        <div className="custom-carousel-img-wrap">
                            <img className="custom-carousel-img img-fluid" src="assets/images/rocket.png" />
                        </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <div className="custom-carousel">
                            <h3 className="custom-carousel-ttl">$4,242.98</h3>
                            <h4 className="custom-carousel-sttl">1 fast</h4>
                            <p className="custom-carousel-p">adipiscing elit. Curabitur id eros pulvinar, lacinia enim eu, egestas libero.</p>
                            <div className="custom-carousel-cta-wrap">
                                <button className="btn bttn bttn-primary st">Launch app</button>
                                <button className="btn bttn bttn-primary bttn-outline st">buy fast</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <div className="custom-carousel">
                        <div className="custom-carousel-img-wrap">
                            <img className="custom-carousel-img img-fluid" src="assets/images/rocket.png" />
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
