import type { JSX } from 'react';
import theBigGuyImage from '../assets/images/the-big-guy.jpg';
import { LandingProfileInfo } from './info';
import { LandingProfileSocials } from './socials';

export function LandingProfile(): JSX.Element {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center text-xs mt-32 mx-auto px-4 py-8 sm:flex-row sm:p-0 sm:text-base">
      <img
        alt="guy looking fown, hiding entire face with his hand"
        className="w-[40vw] h-[40vw] m-2 rounded-full self-center shadow-md shadow-amber-400 sm:h-32 sm:w-32 sm:min-h-32 sm:min-w-32 md:self-auto"
        loading="eager"
        src={theBigGuyImage}
      />

      <div className="mx-5 my-8 sm:mx-5 sm:my-3 ">
        <LandingProfileInfo />
        <LandingProfileSocials />
      </div>
    </div>
  );
}
