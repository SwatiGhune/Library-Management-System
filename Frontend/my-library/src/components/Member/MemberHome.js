import React from 'react';
// import './MemberHome.css';
import { Link } from "react-router-dom";


const MemberHome = (props) => {
    return (
        <div>
            <div className="bg-dark py-5">
                <div className="container py-5">
                    {/* <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light text-white">Our Features</h2>
                            </div>
                    </div> */}

                    <div className="row text-center">
                    <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/allbooks" className="nav-link px-8 text-black" ><h5>All Books</h5></Link>

                        </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/1.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/issuebook" className="nav-link px-8 text-black "><h5>Issue Book Details</h5></Link>

                                
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/findbook" className="nav-link px-8 text-black "><h5>Find Book</h5></Link>

                            
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/availablebooks" className="nav-link px-8 text-black "><h5>Available Books</h5></Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/renewbook" className="nav-link px-8 text-black "><h5>Renew Book</h5></Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/5.jpeg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <Link to="/payfine" className="nav-link px-8 text-black "><h5>Pay Fine</h5></Link>

                        </div>
                        </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MemberHome
