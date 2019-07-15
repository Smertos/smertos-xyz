import { GlobalStyles } from 'app/components/global-styles';
import { Router } from 'app/components/router';
import React, { Component } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;

export class App extends Component {

    render(): JSX.Element {
        return (
            <AppContainer>
                <GlobalStyles />
                <Router />
            </AppContainer>
        );
    }

}
