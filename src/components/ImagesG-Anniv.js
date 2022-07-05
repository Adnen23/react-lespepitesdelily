import React, { Component } from "react";
import ImagesCarousel from "./ImagesCarousel";
import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';


class ImagesGAnniv extends Component {
    render() {
        const imgGAnnivInfo = [
            {
                id: 1,
                class: "active",
                src: "https://mdbootstrap.com/img/new/slides/041.webp",
                alt: "Gateau d'anniversaire",
            },
            {
                id: 2,
                src: "https://mdbootstrap.com/img/new/slides/042.webp",
                alt: "",
            },
            {
                id: 2,
                src: "https://mdbootstrap.com/img/new/slides/043.webp",
                alt: "",
            },
        ]

        const ImagesGAnnivs = imgGAnnivInfo.map(imgGA => <ImagesCarousel
            key={imgGA.id}
            class={imgGA.class}
            src={imgGA.src}
            alt={imgGA.alt}
        />)

        return (
            <>
                <MDBCarousel showControls dark>
                    <MDBCarouselInner>
                        {ImagesGAnnivs}
                    </MDBCarouselInner>
                </MDBCarousel>
            </>
        )
    }
}

export default ImagesGAnniv