import Icon from '@mdi/react';
import {
    mdiGithubCircle,
    mdiLinkedinBox,
    mdiEmail,
    mdiNpm,
    mdiTwitch,
    mdiTwitter
} from '@mdi/js';
import React from 'react';
import { LandingProfileSocialLink, LandingProfileSocialWrapper } from './landing-profile-social.styled';

type TIcon = {
    fill: string
    icon: string,
    noBlack?: boolean,
    url: string
};

const iconLinks: Array<TIcon> = [
    { icon: mdiGithubCircle, url: 'https://github.com/Smertos', fill: '#615d5d' },
    { icon: mdiLinkedinBox, url: 'https://www.linkedin.com/in/smertos/', fill: '#0077b5' },
    { icon: mdiEmail, url: 'mailto:mr.smertos@gmail.com', fill: '#e39e44', noBlack: true },
    { icon: mdiNpm, url: 'https://www.npmjs.com/~smertos', fill: '#cb0000' },
    { icon: mdiTwitter, url: 'https://twitter.com/Smertos', fill: '#1da1f2' },
    { icon: mdiTwitch, url: 'https://www.twitch.tv/smertos', fill: 'blueviolet' }
];

export function LandingProfileSocial(): JSX.Element {
    return (
        <LandingProfileSocialWrapper>
            {iconLinks.map((link: TIcon) => (
                <LandingProfileSocialLink
                    fill={link.fill}
                    href={link.url}
                    key={link.icon}
                    rel="noopener"
                    target={link.noBlack ? '_self' : '_black'}
                >
                    <Icon path={link.icon} size={1.25} />
                </LandingProfileSocialLink>
            ))}
        </LandingProfileSocialWrapper>
    );
}
