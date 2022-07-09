import React, { Component } from "react";
import ImagesCarousel from "./ImagesCarousel";
import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';

class ImagesSales extends Component {
    render() {
        const imgSalesInfo = [
            {
                id: 1,
                class: "active p-3",
                src: './Images/Sales/PhotoSale1.jpg',
                alt: "Salés1",
            },
            {
                id: 2,
                class: "p-3",
                src: "./Images/Sales/PhotoSale2.jpg",
                alt: "Salés2",
            },
            {
                id: 3,
                class: "p-3",
                src: "./Images/Sales/PhotoSale3.jpg",
                alt: "Salés3",
            },
            {
                id: 4,
                class: "p-3",
                src: "./Images/Sales/PhotoSale4.jpg",
                alt: "Salés4",
            },
        ]

        const ImagesSaless = imgSalesInfo.map(imgSle => <ImagesCarousel
            key={imgSle.id}
            class={imgSle.class}
            src={imgSle.src}
            alt={imgSle.alt}
        />)

        return (
            <MDBCarousel showControls dark>
                <MDBCarouselInner>
                    {ImagesSaless}
                </MDBCarouselInner>
            </MDBCarousel>

        )
    }
}

export default ImagesSales