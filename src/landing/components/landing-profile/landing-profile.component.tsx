import { LandingProfileAvatar } from 'landing/components/landing-profile-avatar';
import { LandingProfileInfo } from 'landing/components/landing-profile-info';
import { LandingProfileSocial } from 'landing/components/landing-profile-social';
import landingAvatar from 'landing/images/me.jpg';
import React, { Component } from 'react';
import styled from 'styled-components';

const LandingProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin: 8rem auto;
    
    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        width: auto;
        font-size: 0.75rem;
    }
`;

const LandingProfileGeneralWrapper = styled.div`
    margin: 0.75em 1.25em;
    
    @media (max-width: 640px) {
        margin: 2em 1.25em;
    }
`;

export class LandingProfile extends Component {

    render(): JSX.Element {
        return (
            <LandingProfileContainer>
                <LandingProfileAvatar src={landingAvatar} />
                
                <LandingProfileGeneralWrapper>
                    <LandingProfileInfo
                        name="Mikhail Vedernikov"
                        userName="Smertos"
                        description="Full-stack JS Developer"
                    />
                    
                    <LandingProfileSocial />
                </LandingProfileGeneralWrapper>
            </LandingProfileContainer>
        );
    }

}
 
