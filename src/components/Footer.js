import React, { Component } from "react";
import { MDBFooter, MDBRow } from 'mdb-react-ui-kit';
import Logo1 from '../images/Logo1.jpg'
import MySocialMedia from "./SocialMedia";




class MyFooter extends Component {
    render() {
        return (
            <MDBFooter className='color-Navbar text-black text-center text-md-start'>
                <div className='container p-4'>
                    <MDBRow>
                        <div className='col-lg-4 col-md-12 mb-4 mb-md-0 '>
                            <img
                                src={Logo1}
                                className='img-fluid rounded-pill shadow-5-strong'
                                alt=''
                                style={{ maxWidth: '7rem' }}
                            />
                        </div>

                        <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
                            <h5 className='text-uppercase text-center'>Mes coordonnées</h5>
                            <hr />

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href="tel:+213540513513">
                                        <i className="fa-solid fa-phone me-3"></i>0540 513 513
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:pepitesdelily@gmail.com">
                                        <i className='fa-solid fa-envelope me-3'></i>
                                        pepitesdelily@gmail.com
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className='col-lg-4 col-md-6 mb-4 mb-md-0 text-center'>
                            <h5 className='text-uppercase mb-0 text-center'>Suivez moi</h5>
                            <hr />

                            <MySocialMedia/>
                        </div>
                    </MDBRow>
                </div>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright: 
                    <a className='text-white' href='https://bit.ly/3axF9Cr'>
                         Les pépites de lily
                    </a>
                </div>
            </MDBFooter>
        );
    }
}
export default MyFooter;