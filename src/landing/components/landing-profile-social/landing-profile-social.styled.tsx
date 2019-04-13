import styled from 'styled-components';

export const LandingProfileSocialLink = styled.a.attrs<{ fill: string }>({ target: '_blank' })`
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    background-color: transparent;
    fill: #ddd;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        fill: ${props => props.fill};
    }
`;

export const LandingProfileSocialWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0 11.5em;
`;
