import { Component } from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Logo from '../images/Logo.png'


class Presentation extends Component {
    render() {
        return (
            <MDBCard style={{ maxWidth: '100%' }}>
                <MDBRow className='g-0 row g-4 p-3 d-flex  flex-sm-row-reverse'>
                    <MDBCol md='4'>
                        <MDBCardImage src={Logo} alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>Les Pépites de Lily</MDBCardTitle>
                            <MDBCardText>
                                Bienvenue dans le site internet des Pépites de Lily, Passionnée de pâtisserie et de cuisine, je partage avec vous mes réalisations et surtout n'hesitez pas à me contacter pour vos commandes.
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        );
    }
}
export default Presentation;