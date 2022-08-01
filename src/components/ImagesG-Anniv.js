import React, { Component } from "react";
import ImagesCarousel from "./ImagesCarousel";
import { imgGAnnivInfo } from "./Datas/listImgGA";


class ImagesGAnniv extends Component {
    render() {
        return (
            <>
                {imgGAnnivInfo.map(imgGA => <ImagesCarousel
                    key={imgGA.id}
                    class={imgGA.class}
                    src={imgGA.src}
                    alt={imgGA.alt}
                />)}
            </>
        )
    }
}

export default ImagesGAnniv