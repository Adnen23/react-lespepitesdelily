import React, { Component } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import background1 from '../images/background1.png'
import MySocialMedia from './SocialMedia';
import ImagesSales from './Images-Sales';


class Sales extends Component {
    render() {
        return (
            <MDBCard style={{ maxWidth: '100%', backgroundImage: `url(${background1})` }} className="container" id='Sales'>
                <MDBRow className='row col d-flex align-items-center ' >
                    <MDBCol md='8' className=' d-flex justify-content-center align-items-center'>
                        <MDBCardBody >
                            <MDBCardTitle className="text-center fw-bolder text-decoration-underline fs-1">Salés</MDBCardTitle>
                            <MDBCardText className="text-center fs-5 mt-4">
                                Pour vos fêtes de mariages, fiançailles, naissance, soirées... faites, n"hesitez pas à
                                commander tous types de salés (Mini pizza, mini Quiches? Burger...)
                            </MDBCardText>
                            <MDBCardText className="text-center fs-5 ">
                                Pour toutes vos commandes veuillez me contacter par
                                téléphone ou via ma page instagram.
                            </MDBCardText>
                            <MDBCardText className='text-center'>
                                <small><MySocialMedia /></small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol md='4' className="bg-img  d-flex justify-content-center align-items-center">
                        <ImagesSales />
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        );
    }
}
export default Sales;