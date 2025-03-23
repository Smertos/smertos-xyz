import type { JSX, ReactNode } from 'react';
import './Layout.css';

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden">
      <div>
        {children}
      </div>
    </div>
  );
}
