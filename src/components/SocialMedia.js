import React, { Component } from "react";
import SocialMediaItem from "./SocialMediaItems";
//import socialMediaInfo from "./SocialMediaInfo";

class MySocialMedia extends Component {

    render() {
        //const socialMediaInfos = {socialMediaInfo}
        const socialMediaInfo = [
            {
                id: 1,
                href: 'https://www.facebook.com/Les-p%C3%A9pites-de-lily-103187058352165/',
                icon: 'facebook-f',
                style: {color: '#3b5998'}
            },
            {
                id: 2,
                href: 'https://www.instagram.com/les_pepitesdelily/?hl=fr',
                icon: 'instagram',
                style: {color: '#ac2bac'}
            },
            {
                id: 3,
                href: 'mailto:pepitesdelily@gmail.com',
                icon: 'google',
                style: {color: '#dd4b39'}
            },
            {
                id: 4,
                href: 'tel:+213540513513',
                icon: 'phone-alt',
                style: {color: '#25D366'}
            },
        ]
        
        const socials = socialMediaInfo.map(social=><SocialMediaItem 
                            key={social.id}
                            href={social.href}
                            icon={social.icon}
                            style={social.style}
        />)

        return (
            <div>
                {socials}
            </div>
        );
    }
}
export default MySocialMedia;