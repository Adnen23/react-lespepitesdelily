
import React, { Component }  from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Logo from '../images/Logo.png'
import background1 from '../images/background1.png'
import MySocialMedia from './SocialMedia';


class GateauAnnive extends Component {
    render() {
        return (
            <MDBCard style={{ maxWidth: '100%', backgroundImage: `url(${background1})` }} className="container">
                <MDBRow className='row col d-flex align-items-center flex-sm-row-reverse' >
                    <MDBCol md='8'>
                        <MDBCardBody >
                            <MDBCardTitle className="text-center fw-bolder text-decoration-underline fs-1">Gateaux
            d'anniversaire</MDBCardTitle>
                            <MDBCardText className="text-center fs-5 mt-4">
                            Vous fêtez votre anniversaire ou l'anniversaire d'un de
                            vos amis ou vos proches, alors faites appel au Pépites de Lily, des gâteaux sur mesure pour
                            tous vos événements. Nous vous confectionnons un gâteau original et gourmand pour un moment
                            inoubliable et pour tous les thèmes et toutes les occasions, n'hésitez plus et trouvez le
                            vôtre !
                            </MDBCardText>
                            <MDBCardText className="text-center fs-5 ">
                            Pour toutes vos commandes veuillez me contacter par
                            téléphone ou via ma page instagram.
                            </MDBCardText>
                            <MDBCardText  className='text-center'>
                                <small><MySocialMedia /></small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol md='4' className="bg-img text-center">
                        <MDBCardImage src={Logo} alt='...' fluid />
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        );
    }
}
export default GateauAnnive;