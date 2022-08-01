import React, { Component } from "react";
import SocialMediaItem from "./SocialMediaItems";
import { socialMediaInfo } from "./Datas/socialMediaInfo";

class MySocialMedia extends Component {

    render() {
        return (
            <>
                {
                    socialMediaInfo.map(social => <SocialMediaItem
                        key={social.id}
                        href={social.href}
                        icon={social.icon}
                        style={social.style}
                    />)
                }
            </>
        );
    }
}
export default MySocialMedia;