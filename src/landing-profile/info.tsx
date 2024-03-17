import { useEffect, useRef } from 'react';

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);
const description = 'Software Engineer / Full Stack Developer / Gamer';
const name = 'Mikhail Vedernikov';
const offsetMultiplier: number = 5;
const username = 'Smertos';

export function LandingProfileInfo(): JSX.Element {
  const primaryNameRef = useRef<HTMLDivElement>(null);
  const secondaryNameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
       if (!primaryNameRef.current || !secondaryNameRef.current) {
            return;
        }

        const { clientX, clientY } = event;
        const { bottom, height, width, left, right, top, x, y } = primaryNameRef.current.getBoundingClientRect();
        const [halfWidth, halfHeight] = [width / 2, height / 2];

        const isLeft = clientX < (x + halfWidth);
        const isTop = clientY < (y + halfHeight);

        const positionX = x + halfWidth;
        const positionY = y + halfHeight;

        const diffX = clientX - positionX;
        const diffY = clientY - positionY;

        const offsetX = -offsetMultiplier * diffX / ((isLeft ? left : right) + halfWidth);
        const offsetY = -offsetMultiplier * diffY / ((isTop ? top : bottom) + halfHeight);

        primaryNameRef.current.style.textShadow = `
            ${clamp(offsetX, -4, 4)}px ${clamp(offsetY, -4, 4)}px 5px red
        `;

        secondaryNameRef.current.style.textShadow = `
            ${clamp(offsetX, -3, 3)}px ${clamp(offsetY, -3, 3)}px 3px blue
        `;
    };

    document.body.addEventListener('mousemove', eventHandler);

    return () => document.body.removeEventListener('mousemove', eventHandler);
  });

  return (
    <div className="text-4xl">
      <div className="flex flex-col min-[420px]:flex-row gap-4 items-center">
        <div className="relative align-middle min-[420px]:inline" ref={primaryNameRef}>
          {name}

          <div className="absolute top-0 left-0 select-none" ref={secondaryNameRef}>{name}</div>
        </div>

        <div className="text-base text-slate-700 border-1 border-slate-700 align-baseline hidden min-[420px]:inline">@{username}</div>
      </div>

      <div className="text-sm text-slate-400 mt-0 min-[420px]:mt-2 sm:mt-1">{description}</div>
    </div>
  );
}