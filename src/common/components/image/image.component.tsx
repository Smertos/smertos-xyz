import React, { Component } from 'react';
import styled from 'styled-components';

interface ImageProps {
    height: number;
    src: string;
    width: number;
}

const ImageContainer = styled.img``;

export class Image extends Component {

    props: ImageProps;

    render(): JSX.Element {
        return (
            <ImageContainer {...this.props} />
        );
    }

}
 
