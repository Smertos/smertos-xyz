import { mdiEmail, mdiGithub, mdiLinkedin, mdiNpm, mdiTwitch, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';

type TIconLink = {
    className: string
    icon: string,
    noBlank?: boolean,
    url: string
};

const iconLinks: Array<TIconLink> = [
  { className: 'hover:fill-[#615d5d] active:fill-[#615d5d]', icon: mdiGithub, url: 'https://github.com/Smertos' },
  { className: 'hover:fill-[#e39e44] active:fill-[#e39e44]', icon: mdiEmail, url: 'mailto:mr.smertos@gmail.com', noBlank: true },
  { className: 'hover:fill-[#0077b5] active:fill-[#0077b5]', icon: mdiLinkedin, url: 'https://www.linkedin.com/in/smertos/' },
  { className: 'hover:fill-[#cb0000] active:fill-[#cb0000]', icon: mdiNpm, url: 'https://www.npmjs.com/~smertos' },
  { className: 'hover:fill-[#1da1f2] active:fill-[#1da1f2]', icon: mdiTwitter, url: 'https://twitter.com/Smertos' },
  { className: 'hover:fill-[blueviolet] active:fill-[blueviolet]', icon: mdiTwitch, url: 'https://www.twitch.tv/smertos' }
];

export function LandingProfileSocials() {
  return (
    <div className="inline-flex flex-wrap gap-2 mt-4 mx-auto sm:mt-3 sm:mx-0">
      {iconLinks.map((iconLink) => (
        <a
          className={'h-[1.875rem] w-[1.875rem] p-1 bg-transparent no-underline cursor-pointer ' + iconLink.className}
          key={atob(iconLink.url)}
        >
          <Icon path={iconLink.icon} size={1.25} />
        </a>
      ))}
    </div>
  );
}
