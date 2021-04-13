import React from 'react'
import './Homepage.css';
import CustomCarousel from '../components/CustomCarousel';

function Homepage() {
    return (
        <>
            <section className="cust-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CustomCarousel />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Homepage
