
import React, { Component }  from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Logo from '../images/Logo.png'
import background1 from '../images/background1.png'


class Presentation extends Component {
    render() {
        return (
            <MDBCard style={{ maxWidth: '100%', backgroundImage: `url(${background1})` }}>
                <MDBRow className='row g-4 p-3 d-flex flex-sm-row-reverse justify-content-center align-items-center bg1' >
                    <MDBCol md='4' className="bg-img">
                        <MDBCardImage src={Logo} alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody >
                            <MDBCardTitle className="text-center fw-bolder text-decoration-underline fs-1">Les Pépites de Lily</MDBCardTitle>
                            <MDBCardText className="text-center fs-5 mt-4">
                                Bienvenue dans le site internet des Pépites de Lily, Passionnée de pâtisserie et de cuisine, je partage avec vous mes réalisations et surtout n'hesitez pas à me contacter pour vos commandes.
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'></small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        );
    }
}
export default Presentation;