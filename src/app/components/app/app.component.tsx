import { AppRouter } from 'app/components/app-router';
import { AppStyles } from 'app/components/app-styles';
import React from 'react';
import styled from 'styled-components';

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
            <AppStyles />
            <AppRouter />
        </AppContainer>
    );
}
