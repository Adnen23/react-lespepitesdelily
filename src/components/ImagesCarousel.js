import React, { Component } from "react";
import { MDBCarouselItem, MDBCarouselElement, } from 'mdb-react-ui-kit';

class ImagesCarousel extends Component {
    render() {
        return (
            <MDBCarouselItem className={this.props.class}>
                <MDBCarouselElement src={this.props.src} alt={this.props.alt} className="rounded shadow-3-strong img-thumbnail" style={{ maxWidth: '18rem' }}
                />
            </MDBCarouselItem>
        );
    }
}
export default ImagesCarousel