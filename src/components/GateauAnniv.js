import React, { Component } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import background1 from '../images/background1.png'
import MySocialMedia from './SocialMedia';
import ImagesGAnniv from './ImagesG-Anniv';
import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';



class GateauAnnive extends Component {
    render() {
        const text = "Vous fêtez votre anniversaire ou l'anniversaire d'un de vos amis ou vos proches, alors faites appel au Pépites de Lily, des gâteaux sur mesure pour tous vos événements. Nous vous confectionnons un gâteau original et gourmand pour un moment inoubliable et pour tous les thèmes et toutes les occasions, n'hésitez plus et trouvez le vôtre !"
        return (
            <MDBCard style={{ maxWidth: '100%', backgroundImage: `url(${background1})` }} className="container" id="Anniversaire" >
                <MDBRow className='row col d-flex align-items-center justify-content-center flex-sm-row-reverse' >
                    <MDBCol md='8' className=' d-flex justify-content-center align-items-center'>
                        <MDBCardBody >
                            <MDBCardTitle className="text-center fw-bolder text-decoration-underline fs-1" >Gateaux
                                d'anniversaire</MDBCardTitle>
                            <MDBCardText className="text-center fs-5 mt-4">
                                {text}
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
                        <MDBCarousel showControls dark>
                            <MDBCarouselInner>
                                <ImagesGAnniv />
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        );
    }
}
export default GateauAnnive;