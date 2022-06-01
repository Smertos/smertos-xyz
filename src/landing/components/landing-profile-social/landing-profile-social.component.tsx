import { mdiGithub, mdiLinkedin, mdiEmail, mdiNpm, mdiTwitch, mdiTwitter } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';
import { LandingProfileSocialLink, LandingProfileSocialWrapper } from './landing-profile-social.styled';

type TIcon = {
    fill: string
    icon: string,
    noBlank?: boolean,
    url: string
};

const iconLinks: Array<TIcon> = [
    { icon: mdiGithub, url: 'https://github.com/Smertos', fill: '#615d5d' },
    { icon: mdiLinkedin, url: 'https://www.linkedin.com/in/smertos/', fill: '#0077b5' },
    { icon: mdiEmail, url: 'mailto:mr.smertos@gmail.com', fill: '#e39e44', noBlank: true },
    { icon: mdiNpm, url: 'https://www.npmjs.com/~smertos', fill: '#cb0000' },
    { icon: mdiTwitter, url: 'https://twitter.com/Smertos', fill: '#1da1f2' },
    { icon: mdiTwitch, url: 'https://www.twitch.tv/smertos', fill: 'blueviolet' }
];

function mapLinkToClickableIcon(link: TIcon): JSX.Element {
    return (
        <LandingProfileSocialLink
            fill={link.fill}
            href={link.url}
            key={link.icon}
            rel="noopener noreferrer"
            target={link.noBlank ? '_self' : '_blank'}
        >
            <Icon path={link.icon} size={1.25} />
        </LandingProfileSocialLink>
    );
}

export function LandingProfileSocial(): JSX.Element {
    return (
        <LandingProfileSocialWrapper>
            {iconLinks.map(mapLinkToClickableIcon)}
        </LandingProfileSocialWrapper>
    );
}
