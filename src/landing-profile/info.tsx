import type { JSX } from "react";
import catImage from "../assets/images/catge.png";
import { useNameShadowMovement } from "../utils";

const name = "Mikhail Vedernikov";
const offsetMultiplier: number = 5;

export function LandingProfileInfo(): JSX.Element {
  const [primaryNameRef, secondaryNameRef] = useNameShadowMovement(offsetMultiplier);

  return (
    <div className="text-4xl">
      <div className="flex flex-col min-[420px]:flex-row gap-4 items-center">
        <div className="relative align-middle min-[420px]:inline">
          {name}

          <div className="absolute top-0 left-0 select-none" ref={primaryNameRef}>
            {name}
          </div>
          <div className="absolute top-0 left-0 select-none" ref={secondaryNameRef}>
            {name}
          </div>
        </div>

        <div className="group relative pl-4 text-base text-violet-200 border-l-2 border-slate-700 align-baseline hidden min-[420px]:inline">
          <span className="underline hover:no-underline hover:cursor-pointer">@Smertos</span>

          <div className="hidden absolute w-60 group-has-[span:hover]:flex flex-col gap-4 top-[2rem] right-0 select-none z-100">
            <img
              alt="face of a siliy cat with tongue out"
              className="h-full w-full object-cover rounded-md"
              src={catImage}
            />

            <p className="bg-slate-700 text-white px-4 py-2 rounded-md text-center">
              &laquo;Silly individual <span className="text-xs">(me)</span>&raquo;
            </p>
          </div>
        </div>
      </div>

      <div className="text-sm text-slate-400 mt-0 min-[420px]:mt-2 sm:mt-1">
        Software Engineer / Full Stack Developer / Gamer
      </div>
    </div>
  );
}
