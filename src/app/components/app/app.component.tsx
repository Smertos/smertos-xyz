import styled from '@emotion/styled';
import { AppRouter } from 'app/components/app-router';
import React from 'react';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;

export function App(): JSX.Element {
    return (
        <AppContainer>
            <AppRouter />
        </AppContainer>
    );
}
