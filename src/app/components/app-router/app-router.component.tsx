import React, { lazy, Suspense } from 'react';
import { HashRouter, Route } from 'react-router-dom';

const Landing = lazy(() => import('landing/components/landing-page'));

export function AppRouter(): JSX.Element {
    return (
        <HashRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/" exact component={Landing} />
            </Suspense>
        </HashRouter>
    );
}

