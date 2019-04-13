import { LandingProfileAvatar } from 'landing/components/landing-profile-avatar';
import { LandingProfileInfo } from 'landing/components/landing-profile-info';
import { LandingProfileSocial } from 'landing/components/landing-profile-social';
import landingAvatar from 'landing/images/me.jpg';
import React, { Component } from 'react';
import styled from 'styled-components';

const LandingProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 44rem;
    margin: 8rem auto;
`;

export class LandingProfile extends Component {

    render(): JSX.Element {
        return (
            <LandingProfileContainer>
                <LandingProfileAvatar src={landingAvatar} />
                
                <LandingProfileInfo
                    name="Mikhail Vedernikov"
                    userName="Smertos"
                    description="Full-stack JS Developer"
                />
                    
                <LandingProfileSocial />
            </LandingProfileContainer>
        );
    }

}
 
