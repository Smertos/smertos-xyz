import styled from 'styled-components';

export const LandingProfileSocialLink = styled.a<{ fill: string }>`
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    background-color: transparent;
    fill: #ddd;
    text-decoration: none;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 0.5em;
    }
    
    &:hover, &:active {
        fill: ${props => props.fill};
    }
`;

export const LandingProfileSocialWrapper = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    margin-top: 1em;
    
    @media (max-width: 640px) {
        margin: 1em auto 0;
    }
`;
