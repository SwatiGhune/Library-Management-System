import React from 'react';
import './features.css';
import { Link } from "react-router-dom";


const Features = (props) => {
    return (
        <div>
            <div className="bg-dark py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light text-white">Our Features</h2>
                            </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/1.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Show Books</h5></Link>

                                {/* <div className="col-md-2">
                                    <GiOpenBook/>
                                </div> */}
                                {/* <span className="small  text-muted">CEO - Founder</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Add Book</h5></Link>

                                {/* <span className="small text-muted">Designer</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Member Info</h5></Link>

                                {/* <span className="small text-muted">Designer</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Issue Book</h5></Link>

                                {/* <span className="small text-muted">Designer</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Return Book</h5></Link>

                                {/* <span className="small text-muted">Designer</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/2.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Book Info</h5></Link>
                                
                                {/* <span className="small text-muted">Consultant</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/3.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Search Book</h5></Link>

                                {/* <span className="small text-muted">Consultant</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/4.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/about" className="nav-link px-8 text-black "><h5>Fine Payment</h5></Link>

                                {/* <span className="small text-muted">Advisor</span> */}
                                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="!#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features
