import { useEffect, useRef } from "react";

const OFSET_LIMIT_PRIMARY = 4;
const OFSET_LIMIT_SECONDARY = 3;

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function degreeToCssColor(deg: number, per: number): string {
  const hue = Math.round(360 * deg / per);
  return `hsl(${hue} 100% 50%)`;
}

function clampCoords(offsetX: number, offsetY: number, limit: number): string {
  const clampedX = clamp(offsetX, -limit, limit);
  const clampedY = clamp(offsetY, -limit, limit);

  return `${clampedX}px ${clampedY}px`;
}

export function useNameShadowMovement(offsetMultiplier: number) {
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

      const isLeft = clientX < x + halfWidth;
      const isTop = clientY < y + halfHeight;

      const positionX = x + halfWidth;
      const positionY = y + halfHeight;

      const diffX = clientX - positionX;
      const diffY = clientY - positionY;

      const offsetX = (-offsetMultiplier * diffX) / ((isLeft ? left : right) + halfWidth);
      const offsetY = (-offsetMultiplier * diffY) / ((isTop ? top : bottom) + halfHeight);

      document.body.style.setProperty("--color-name-primary", degreeToCssColor(clientX, 1080));
      document.body.style.setProperty("--color-name-secondary", degreeToCssColor(clientY, 1080));

      const primaryTextShadow = `${clampCoords(offsetX, offsetY, OFSET_LIMIT_PRIMARY)} 5px var(--color-name-primary)`;
      const secondaryTextShadow = `${clampCoords(offsetX, offsetY, OFSET_LIMIT_SECONDARY)} 3px var(--color-name-secondary)`;

      primaryNameRef.current.style.setProperty("text-shadow", primaryTextShadow);
      secondaryNameRef.current.style.setProperty("text-shadow", secondaryTextShadow);

      const primaryOpacity = clamp(diffX < 0 ? Math.abs(diffX) / top : diffX / bottom, 0, 1);
      const secondaryOpacity = clamp(diffY < 0 ? Math.abs(diffY) / left : Math.abs(diffY) / right, 0, 1);

      primaryNameRef.current.style.setProperty("opacity", String(primaryOpacity));
      secondaryNameRef.current.style.setProperty("opacity", String(secondaryOpacity));
    };

    document.body.addEventListener("mousemove", eventHandler);

    return () => document.body.removeEventListener("mousemove", eventHandler);
  });

  return [primaryNameRef, secondaryNameRef];
}
