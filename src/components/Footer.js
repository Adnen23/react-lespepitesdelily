import React, { Component } from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Logo1 from '../images/Logo1.jpg'


class MyFooter extends Component {
    render() {
        return (
            <MDBFooter className='color-Navbar text-black text-center text-md-start'>
                <div className='container p-4'>
                    <MDBRow>
                        <div className='col-lg-4 col-md-12 mb-4 mb-md-0'>
                            <img
                                src={Logo1}
                                className='img-fluid rounded-pill hover-shadow'
                                alt=''
                                style={{ maxWidth: '12rem' }}
                            />

                            <h5 className='text-uppercase mt-2'>
                                Les Pépites de lily
                            </h5>

                        </div>

                        <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Mes coordonnées</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href="tel:+213540513513">
                                        <i className='fas fa-phone-alt me-3'></i> 0540 513 513
                                    </a>
                                </li>
                                <li>
                                    <p>
                                        <i className='fas fa-envelope me-3'></i>
                                        pepitesdelily@gmail.com
                                    </p>
                                </li>

                            </ul>
                        </div>

                        <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
                            <h5 className='text-uppercase mb-0'>Links</h5>

                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </MDBRow>
                </div>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        );
    }
}
export default MyFooter;