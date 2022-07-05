import React, { Component } from "react";
import { MDBCarouselItem, MDBCarouselElement, } from 'mdb-react-ui-kit';

class ImagesCarousel extends Component {
    render() {
        return (
            <>
                <MDBCarouselItem className={this.props.class}>
                    <MDBCarouselElement src={this.props.src} alt={this.props.alt} />
                </MDBCarouselItem>
            </>
        );
    }
}
export default ImagesCarousel