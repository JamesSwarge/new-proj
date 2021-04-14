import React from 'react'
import './Footer.scss';

function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <h4>Contact Us</h4>
                                    <a className="email-link" href="mailto:contact@fastyield.app">contact@fastyield.app</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget">
                                    <h4>Learn More</h4>
                                    <ul className="nav footer-link">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Audit</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contract</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Wiki</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget mb-0">
                                    <h4>Join Community</h4>
                                    <ul className="nav footer-social-link">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i class="fab fa-telegram-plane"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i class="fab fa-github-alt"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
