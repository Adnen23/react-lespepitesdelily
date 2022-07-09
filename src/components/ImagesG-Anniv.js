import React, { Component } from "react";
import ImagesCarousel from "./ImagesCarousel";
import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';
//import PhotoAnniv1 from '../../public/Images/G-Anniversaire/PhotoAnniv1.jpg'


class ImagesGAnniv extends Component {
    render() {
        const imgGAnnivInfo = [
            {
                id: 1,
                class: "active p-3",
                src: './Images/G-Anniversaire/PhotoAnniv1.jpg',
                alt: "Gateau d'anniversaire1",
            },
            {
                id: 2,
                class: "p-3",
                src: "./Images/G-Anniversaire/PhotoAnniv2.jpg",
                alt: "Gateau d'anniversaire2",
            },
            {
                id: 3,
                class: "p-3",
                src: "./Images/G-Anniversaire/PhotoAnniv3.jpg",
                alt: "Gateau d'anniversaire3",
            },
            {
                id: 4,
                class: "p-3",
                src: "./Images/G-Anniversaire/PhotoAnniv4.jpg",
                alt: "Gateau d'anniversaire4",
            },
            {
                id: 5,
                class: "p-3",
                src: "./Images/G-Anniversaire/PhotoAnniv5.jpg",
                alt: "Gateau d'anniversaire5",
            },
            {
                id: 6,
                class: "p-3",
                src: "./Images/G-Anniversaire/PhotoAnniv6.jpg",
                alt: "Gateau d'anniversaire6",
            },
        ]

        const ImagesGAnnivs = imgGAnnivInfo.map(imgGA => <ImagesCarousel
            key={imgGA.id}
            class={imgGA.class}
            src={imgGA.src}
            alt={imgGA.alt}
        />)

        return (
            <MDBCarousel showControls dark>
                <MDBCarouselInner>
                    {ImagesGAnnivs}
                </MDBCarouselInner>
            </MDBCarousel>

        )
    }
}

export default ImagesGAnniv