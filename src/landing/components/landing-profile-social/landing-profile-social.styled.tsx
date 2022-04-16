import styled from 'styled-components';

type LandingProfileSocialLinkProps = { fill: string };

export const LandingProfileSocialLink = styled.a<LandingProfileSocialLinkProps>`
    width: 30px;
    height: 30px;
    padding: 0.25em;
    border: none;
    background-color: transparent;
    fill: #ddd;
    text-decoration: none;
    cursor: pointer;

    &:hover, &:active {
        fill: ${(props: LandingProfileSocialLinkProps) => props.fill};
    }
`;

export const LandingProfileSocialWrapper = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    margin-top: 0.75em;

    @media (max-width: 640px) {
        margin: 1em auto 0;
    }
`;
