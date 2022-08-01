import React, { Component } from "react";
import ImagesCarousel from "./ImagesCarousel";
import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';
import { imgSalesInfo } from "./Datas/listImgSale";

class ImagesSales extends Component {
    render() {
        return (
            <MDBCarousel dark>
                <MDBCarouselInner>
                    {
                        imgSalesInfo.map(imgSle => <ImagesCarousel
                            key={imgSle.id}
                            class={imgSle.class}
                            src={imgSle.src}
                            alt={imgSle.alt}
                        />)
                    }
                </MDBCarouselInner>
            </MDBCarousel>

        )
    }
}

export default ImagesSales