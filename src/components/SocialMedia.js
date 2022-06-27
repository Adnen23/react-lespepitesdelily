import React, { Component } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

class MySocialMedia extends Component {
    render() {
        return (
            <>
                <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#3b5998' }} href='https://www.facebook.com/Les-p%C3%A9pites-de-lily-103187058352165/' target="_blank">
                    <MDBIcon fab icon='facebook-f' size='lg' />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#ac2bac' }} href='https://www.instagram.com/les_pepitesdelily/?hl=fr' target="_blank">
                    <MDBIcon fab icon='instagram' size='lg' />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#dd4b39' }} href="mailto:pepitesdelily@gmail.com">
                    <MDBIcon fab icon='google' size='lg' />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-2' style={{ color: "#25D366" }} href="tel:+213540513513">
                    <MDBIcon fas icon='phone-alt' size='lg' />
                </MDBBtn>


            </>
        );
    }
}
export default MySocialMedia;