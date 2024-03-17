import { mdiEmail, mdiGithub, mdiLinkedin, mdiNpm, mdiTwitch, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import posthog from 'posthog-js';
import React from 'react';

type TIconLink = {
    className: string
    icon: string,
    noBlank?: boolean,
    url: string
};

const iconLinks: Array<TIconLink> = [
  { className: 'hover:text-[#615d5d] active:text-[#615d5d]', icon: mdiGithub, url: 'https://github.com/Smertos' },
  { className: 'hover:text-[#e39e44] active:text-[#e39e44]', icon: mdiEmail, url: 'mailto:mr.smertos@gmail.com', noBlank: true },
  { className: 'hover:text-[#0077b5] active:text-[#0077b5]', icon: mdiLinkedin, url: 'https://www.linkedin.com/in/smertos/' },
  { className: 'hover:text-[#cb0000] active:text-[#cb0000]', icon: mdiNpm, url: 'https://www.npmjs.com/~smertos' },
  { className: 'hover:text-[#1da1f2] active:text-[#1da1f2]', icon: mdiTwitter, url: 'https://twitter.com/Smertos' },
  { className: 'hover:text-[blueviolet] active:text-[blueviolet]', icon: mdiTwitch, url: 'https://www.twitch.tv/smertos' }
];

export function LandingProfileSocials() {
  return (
    <div className="inline-flex flex-wrap gap-2 mt-4 mx-auto sm:mt-3 sm:mx-0">
      {iconLinks.map((iconLink) => (
        <a
          className={'h-[1.875rem] w-[1.875rem] bg-transparent no-underline cursor-pointer ' + iconLink.className}
          href={iconLink.url}
          key={btoa(encodeURIComponent(iconLink.url))}
          onClick={() => posthog.capture('socials_click', { hrefUrl: iconLink.url })}
          rel="noopener noreferrer"
          target={iconLink.noBlank ? '' : '_blank'}
        >
          <Icon path={iconLink.icon} size={1.25} />
        </a>
      ))}
    </div>
  );
}
