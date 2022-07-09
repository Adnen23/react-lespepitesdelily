import React, { Component } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

class SocialMediaItem extends Component {

    render() {
        return (
            <>
                <MDBBtn
                    floating
                    tag='a'
                    color='none'
                    className='m-2 hover-shadow'
                    style={this.props.style}
                    href={this.props.href}
                    target="_blank">

                    <MDBIcon
                        fab icon={this.props.icon}
                        size='lg'

                    />
                </MDBBtn>

            </>
        )
    }
}

export default SocialMediaItem