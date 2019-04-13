import Icon from '@mdi/react';
import {
    mdiDiscord,
    mdiGithubCircle,
    mdiLinkedinBox,
    mdiEmail,
    mdiNpm,
    mdiTwitch,
    mdiTwitter
} from '@mdi/js';
import React, { Component } from 'react';
import styled from 'styled-components';

const LandingProfileSocialWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0 11.5em;
`;

const LandingProfileSocialButton = styled.button<{ fill: string }>`
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    background-color: transparent;
    fill: #ddd;
    cursor: pointer;
    
    &:hover {
        fill: ${props => props.fill};
    }
`;

const iconLinks = [
    { icon: mdiTwitch, url: 'https://www.twitch.tv/smertos', fill: 'blueviolet' }, // TODO: fill-in fill colors
    { icon: mdiGithubCircle, url: 'https://github.com/Smertos', fill: '#615d5d' },
    { icon: mdiEmail, url: 'mailto:mr.smertos@gmail.com', fill: '#e39e44' },
    { icon: mdiLinkedinBox, url: 'https://www.linkedin.com/in/smertos/', fill: '#0077b5' },
    { icon: mdiTwitter, url: 'https://twitter.com/Smertos', fill: '#1da1f2' },
    { icon: mdiNpm, url: 'https://www.npmjs.com/~smertos', fill: '#cb0000' },
    { icon: mdiDiscord, url: 'https://discord.gg/BrgNHWx', fill: '#7289da' }
];

export function LandingProfileSocial() {
    return (
        <LandingProfileSocialWrapper>
            {
                iconLinks.map(
                    link => (
                        <LandingProfileSocialButton fill={link.fill} onClick={() => void (location.href = link.url)} key={link.icon}>
                            <Icon path={link.icon} size={1.25} />
                        </LandingProfileSocialButton>
                    )
                )
            }
        </LandingProfileSocialWrapper>
    );
}
