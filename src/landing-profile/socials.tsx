import { SiGithub, SiGithubHex, SiGmail, SiGmailHex, SiNpm, SiNpmHex, SiTwitch, SiTwitchHex, SiX, SiXHex } from "@icons-pack/react-simple-icons";
import posthog from "posthog-js";
import type { JSX } from "react";

type TIconLink = {
  className?: string;
  element: React.ReactNode;
  noBlank?: boolean;
  size?: number;
  url: string;
};

const iconLinks: Array<TIconLink> = [
  {
    element: <SiGithub className="h-6 w-6 invert" color={SiGithubHex} />,
    url: "https://github.com/Smertos",
  },
  {
    element: <SiGmail className="h-6 w-6" color={SiGmailHex} />,
    noBlank: true,
    url: "mailto:mr.smertos@gmail.com",
  },
  {
    element: (
      <div className="h-6 w-6 flex flex-col justify-end bg-[#0077b7] text-white rounded-xs px-[0.1rem] py-[0.05rem]">
        <span title="LinkedIn" className="text-xl leading-none">
          in
        </span>
      </div>
    ),
    url: "https://www.linkedin.com/in/smertos/",
  },
  {
    element: <SiNpm className="h-6 w-6" color={SiNpmHex} />,
    size: 2,
    url: "https://www.npmjs.com/~smertos",
  },
  {
    className: 'invert',
    element: <SiX className="h-6 w-6" color={SiXHex} />,
    url: "https://twitter.com/Smertos",
  },
  {
    element: <SiTwitch className="h-6 w-6" color={SiTwitchHex} />,
    url: "https://www.twitch.tv/smertos",
  },
];

export function LandingProfileSocials(): JSX.Element {
  return (
    <div className="inline-flex flex-wrap gap-4 mt-4 mx-auto sm:mt-3 sm:mx-0">
      {iconLinks.map((iconLink) => (
        <a
          className={`flex flex-col justify-center bg-transparent no-underline cursor-pointer hover:opacity-85 active:opacity-75 ${iconLink.className}`}
          href={iconLink.url}
          key={btoa(encodeURIComponent(iconLink.url))}
          onClick={() => posthog.capture("socials_click", { hrefUrl: iconLink.url })}
          rel="noopener noreferrer"
          target={iconLink.noBlank ? "" : "_blank"}
        >
          {iconLink.element}
        </a>
      ))}
    </div>
  );
}
