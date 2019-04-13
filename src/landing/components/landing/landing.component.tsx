import { LandingProfile } from 'landing/components/landing-profile';
import React, { Component } from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div``;

export class Landing extends Component {

    render(): JSX.Element {
        return (
            <LandingContainer>
                <LandingProfile />
            </LandingContainer>
        );
    }

}

