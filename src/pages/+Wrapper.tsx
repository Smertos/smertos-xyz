import { PostHogProvider } from 'posthog-js/react';
import type { JSX, ReactNode } from 'react';
import './Layout.css';

const posthogOptions = {
  api_host: 'https://eu.posthog.com',
  respect_dnt: true,
};

export function Wrapper({ children }: { children: ReactNode }): JSX.Element {
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <PostHogProvider apiKey={import.meta.env.VITE_POSTHOG_TOKEN} options={posthogOptions}>
      {children}
    </PostHogProvider>
  );
}

