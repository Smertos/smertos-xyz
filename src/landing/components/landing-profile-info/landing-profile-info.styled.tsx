import styled from 'styled-components';

export const LandingProfileInfoWrapper = styled.div`
    font-size: 2em;
`;

export const LandingProfileName = styled.span`
    position: relative;
    vertical-align: middle;
`;

export const LandingProfileNamePhantom = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
`;

export const LandingProfileNameDivider = styled.span`
    margin: 0 .75rem;
    border: 1px solid #8c8d89;
    font-size: 1rem;
    vertical-align: baseline;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const LandingProfileQuickDescription = styled.div`
    font-size: 0.65em;
    color: rgba(220, 220, 220, 0.75);

    @media (max-width: 720px) {
        margin-top: 0.25rem;
    }

    @media (max-width: 420px) {
        margin-top: 0.5rem;
    }
`;

export const LandingProfileUserName = styled.span`
    font-size: 1.25rem;
    color: #8c8d89;
    vertical-align: middle;

    @media (max-width: 420px) {
        display: block;
    }
`;
