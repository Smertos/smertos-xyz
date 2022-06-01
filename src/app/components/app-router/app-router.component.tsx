import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Landing = lazy(() => import('landing/components/landing-page'));

export function AppRouter(): JSX.Element {
    return (
        <HashRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route index element={<Landing />} />
                </Routes>
            </Suspense>
        </HashRouter>
    );
}

