import styled from '@emotion/styled';
import landingAvatar from 'assets/images/the-big-guy.jpg';
import { LandingProfileAvatar } from 'landing/components/landing-profile-avatar';
import { LandingProfileInfo } from 'landing/components/landing-profile-info';
import { LandingProfileSocial } from 'landing/components/landing-profile-social';
import React from 'react';

const LandingProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin: 128px auto 0;
    margin: 25vh auto 0;

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        width: auto;
        padding: 0 2em;
        font-size: 0.75rem;
    }
`;

const LandingProfileGeneralWrapper = styled.div`
    margin: 0.75em 1.25em;

    @media (max-width: 640px) {
        margin: 2em 1.25em;
    }
`;

export function LandingProfile(): JSX.Element {
    return (
        <LandingProfileContainer>
            <LandingProfileAvatar loading="lazy" src={landingAvatar} />

            <LandingProfileGeneralWrapper>
                <LandingProfileInfo
                    description="Front-end Developer"
                    name="Mikhail Vedernikov"
                    userName="Smertos"
                />

                <LandingProfileSocial />
            </LandingProfileGeneralWrapper>
        </LandingProfileContainer>
    );
}

